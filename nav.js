/* TODO: These need submenus that match the headings on each section. Also, the JS needs to be fixed so that we can test this locally. */
var navitems=[
{'link':'/','name':'Main'},
{'link':'/broker.html','name':'Broker'},
<<<<<<< HEAD
{'link':'/messengermac.html','name':'Messenger'},
{'link':'javascript:alert(\'soon\')','name':'LibSAPOjs'}
=======
{'link':'/messengermac.html','name':'Messenger for Mac'},
{'link':'http://js.sapo.pt/SAPO/doc.html','name':'LibSAPOjs'}
>>>>>>> 5a774d134c4a2d96268206a13c0823f6f99d9fe1
];

var sidebar=[
{'bar':'Other links','links':[
  {'link':'https://codebits.eu/','name':'SAPO Codebits'},
  {'link':'http://developers.blogs.sapo.pt','name':'Developers Blog (PT)'},
  {'link':'http://labs.sapo.pt/','name':'SAPO Labs'},
  {'link':'http://services.sapo.pt/Metadata/Home?culture=EN','name':'Public APIs'}]}
];

function buildNav() {
  var c='';
  for(i in navitems)
  {
    c+='<li><a href="'+navitems[i].link+'">'+navitems[i].name+'</a></li>';
  }
  var el=document.getElementsByClassName('nav');
  el[0].innerHTML+=c;

  var c='';
  for(i in sidebar)
  {
    c+='<h5>'+sidebar[i].bar+'</h5>';
    c+='<ul>';
    for(j in links=sidebar[i].links)
    {
      c+='<li><a href="'+links[j].link+'">'+links[j].name+'</a></li>';
    }
    c+='</ul>';
  }
  el=document.getElementsByClassName('well');
  el[0].innerHTML+=c;
return(false);
}

window.onload = function() { buildNav();prettyPrint(); }
