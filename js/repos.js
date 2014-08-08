 var entityMap = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': '&quot;',
    "'": '&#39;',
    "/": '&#x2F;'
  };

  function escapeHtml(string) {
    return String(string).replace(/[&<>"'\/]/g, function (s) {
      return entityMap[s];
    });
  }

var repoList     = document.getElementById('repo-list'),
    projectCount = document.getElementById('project-count'),
    projectInfo  = document.getElementById('project-info'),
    load = function(data){
        if (!data || !data.data || !data.data.length) return;
        var repositories = data.data,
            html = '';
        repositories.sort(function(a, b){
            var aFork = a.fork, bFork = b.fork;
            if (aFork && !bFork) return 1;
            if (!aFork && bFork) return -1;
            return new Date(b.pushed_at) - new Date(a.pushed_at);
        });
        var l = repositories.length, lp = 0, lf = 0, w = 0, f = 0;
        for (var i=0; i<l; i++){
            var r = repositories[i],
                fork = r.fork ? '<i class="icon-code-fork"></i> ' : '',
                watchers = r.watchers,
                forks = r.forks;
            w += r.watchers;
            f += r.forks;
            fork ? lf++ : lp++;
            html += '<div class="all-25 small-100 tiny-100">'
                + '<a href="' + r.html_url + '"><h4>' + r.name + '</h4></a>'
                + '<p class="desc">' + escapeHtml(r.description) + '</p>'
                + fork
                + '<p class="info"><b class="language">' + (r.language || '') + '</b> <b><i class="fa icon-star"></i> ' + watchers + '</b>  <b><i class="fa icon-code-fork"></i> ' + forks + '</b></p>'
                + '</div>';
        }
        repoList.innerHTML = html;
        projectCount.innerHTML = l + ' repositories; ' + lp + ' public, ' + lf + ' forks';
        projectInfo.innerHTML = '<b><i class="icon-star"></i> ' + w + '</b>  <b><i class="icon-code-fork"></i> ' + f + '</b>';
    };
