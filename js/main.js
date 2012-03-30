function basename(path) { return path.replace(/\\/g,'/').replace( /.*\//, '' ); }
function dirname(path) { return path.replace(/\\/g,'/').replace(/\/[^\/]*$/, ''); }

function buildnav(pages, el, m, visible) {
    // TODO: change this back to .each() later when I don't need to inspect the object
    for(i in m) {
        if(m[i].menu) {
            var regex = new RegExp("sapo ", "g");
            var sub = $(el).append('<li class="dropdown"><a href="#" class="dropdown-toggle">' + m[i].label.replace(regex, '<span class="podium">sapo</span> ') + '</a></li>').children().last();
            sub = sub.append('<ul class="dropdown-menu"/>').children().last();
            buildnav(pages, sub,m[i].menu, visible);
            $(el).append("</ul>");
        }
        else {
            if(visible) {
                if(m[i].src) {
                    $(el).append('<li><a href="#!' + m[i].id + '" data="' + m[i].src + '">' + m[i].label + '</a></li>');
                }
                else if(m[i].href) {
                    $(el).append('<li><a href="' + m[i].href + '">' + m[i].label + '</a></li>');
                }
            }
		    pages.add(m[i]);
            if (m[i].children) {
                buildnav(pages, sub,m[i].children, false);
            }
        }
    }
}

$.fn.dropdown = function (selector) {
    return this.each(function () {
        $(this).delegate(selector, 'click', function (e) {
            var li = $(this).parent('li')
            li.toggleClass("open");
            return false
        })
    })
}


$(document).ready(function(){

	window.page = Backbone.Model.extend({});
	window.SitePages = Backbone.Collection.extend({
		model: page
	});

	window.pages = new SitePages;

	// Define our page view:
	window.pageView = Backbone.View.extend({
		tagName: "div",
		className: "container-fluid",
		initialize: function() {
 		    var self = this;
 		    var path = dirname(this.model.get("src"));
 		    var markup = '';
            var regin = new RegExp("\<img ", "gi");
            var regout = new RegExp("\<fig ", "gi");
            var xhr = $.get(this.model.get("src"), function(data) {
                // This is a very, very ugly hack - we replace img with fig to avoid the images being instantiated in the DOM, compute the images' real path, and then revert.
                if($.inArray(self.model.get("src").split(".").pop(),['md','mkd','mdown','markdown']) != -1) {
                    markup = marked(data).replace(regin, "<fig ");
                }
                else {
                    // bypass marked crashes
                    markup = data.replace(regin, "<fig ");
                }
                if(self.model.get("sidebar")) {
                    // TODO: change this to allow for more generic templating.
                    $.ajax({type: 'GET', url: self.model.get("sidebar"), async:false, success: function(sidebar) {
                        markup = $('<div><div class="container-fluid"><div class="sidebar">' + marked(sidebar).replace(regin, "<fig ") + '</div><div class="content">' + markup + '</div></div></div>');
                    }});
                }
                else {
                    markup = $('<div><div class="container">' + markup + '</div></div>');
                }
               $('fig',markup).each(function(){
                  src = $(this).attr('src');
                  if(src[0] != "/") {
                      $(this).attr('src', path + "/" + src);
                  }
               });
               // Now instantiate everything with the right URLs
               markup = $(markup.html().replace(regout, "<img ")  + window.footer);
 		       self.model.set({"html": markup});
            });
			_.bindAll(this, "render");
  			this.model.bind("change", this.render);
  			this.model.view = this;
  			this.title = this.model.get("label");
			this.render();
		},

		render: function() {
		   if(this.model.get("html")) {
               $(this.el).html(this.model.get("html"));
		       prettyPrint();
           }
	       return this;
		}
	});

	window.site = Backbone.Router.extend({
		el:		$("#container"),
		routes: {
			"!:pageName": "show"
		},

		initialize: function(name, sitemap) {
		    window.sitename = name;
		    window.pages.add({id: "index", src:"pages/index.html"});
		    window.pages.add({id: "about", src:"pages/about.mkd", label: "About"});
		    var xhr = $.ajax({type: 'GET', url: "pages/footer.mkd", async:false, data: {}, success: function(data) {
		        window.footer = marked(data);
		    }})
		    var xhr = $.ajax({type: 'GET', url: sitemap, dataType:'json', async:false, data: {}, success: function(data) {
		        buildnav(window.pages, $("#mainnav"),data, true);
		    }})
			// If there isn't a #!something set the site to "home":
			if (window.Backbone.history.getFragment() == "") {
				this.show("index");
			}
		},

		show: function(pageName) {
			var page = pages.get(pageName);
	        var view = (page.view) ? page.view : new pageView({model: page});
	        $(".topbar li").removeClass("active");
	        $('.topbar a[href="#!' + pageName + '"]').parent('li').addClass("active");
	        $(this.el).hide();
	        $(this.el).html(view.el);
	        $(this.el).fadeIn(); // TODO: do this only when appropriate
	        if(page.view.title) {
		        document.title = window.sitename  + " - " + page.view.title;
		    }
		    else {
		        document.title = window.sitename; 
		    }
		}
	});

	// Fire up our app and pass in a sitemap
	window.App = new site("Open Source at sapo", "index.json");

    $('html').bind("mouseup", function() {
        $('.dropdown-toggle').parent('li').removeClass('open')
    });
    $('body').dropdown( '.dropdown-toggle' );
	// Start hashtag tracking via Backbone:
	Backbone.history.start();
});