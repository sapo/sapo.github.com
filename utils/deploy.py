import os.path, json, time
from BeautifulSoup import BeautifulSoup
from slimit import minify

buffer = []

def js_bundle(soup):
    for script in soup.findAll('script'):
        attrs = dict(script.attrs)
        if 'minify' in attrs:
            del script['minify']
            minified = minify(''.join(open('../' + script['src']).readlines()))
            (name, ext) = os.path.basename(script['src']).split('.',-1)
            script['src'] = 'js/' + name + '-min.' + ext
            print "Writing", script['src']
            open('../' + script['src'],'w').write(minified)
        elif 'bundle' in attrs:
            buffer.append(minify(''.join(open('../' + script['src']).readlines())))
            script.extract() # remove from DOM
    return soup

def build_sitemap(values, items=[], root='xml'):
   buffer = {
       'xml': ['<?xml version="1.0" encoding="UTF-8"?>','<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'],
       'item': ['<item>']
   }[root]    
   def tag(tag,value):
       attrs = ''
       if type(value) is list:
           value = u''.join(value)
       if type(value) is dict:
           attrs = ' %s' %  u' '.join(['%s="%s"' % (k, value[k]) for k in value])
           value = ''
       return u'<%(tag)s%(attrs)s>%(value)s</%(tag)s>' % locals()
   for k in values:
       buffer.append(tag(k,values[k]))
   for i in items:
       buffer.append(build_rss(i,root='item'))
   buffer.extend({
       'xml': ['</urlset>'],
       'item': ['</item>']
   }[root])
   return u''.join(buffer)

soup = BeautifulSoup(''.join(open('../dev.html').readlines()))
soup = js_bundle(soup)
soup.head.insert(-1,'<script type="text/javascript" src="js/bundle-min.js"></script>')
print "Writing js/bundle-min.js..."
open('../js/bundle-min.js', 'w').write('\n'.join(buffer))
print "Writing index.html..."
open('../index.html','w').write(str(soup))

soup = BeautifulSoup(''.join(open('../dev-jekyll.html').readlines()))
soup = js_bundle(soup)
soup.head.insert(-1,'<script type="text/javascript" src="js/bundle-jekyll-min.js"></script>')
print "Writing js/bundle-jekyll-min.js..."
open('../js/bundle-jekyll-min.js', 'w').write('\n'.join(buffer))
print "Writing jekyll.html..."
open('../jekyll.html','w').write(str(soup))


root = {
   'loc': 'http://oss.sapo.pt',
   'lastmod': time.strftime("%Y-%m-%d"),
   'changefreq':'daily',
}

# TODO: Generate Google sitemap from JSON once we've moved everything to Jekyll
