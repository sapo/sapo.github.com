import os.path
from BeautifulSoup import BeautifulSoup
from slimit import minify

buffer = []

soup = BeautifulSoup(''.join(open('../dev.html').readlines()))
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

soup.head.insert(-1,'<script type="text/javascript" src="js/bundle-min.js"></script>')
print "Writing js/bundle-min.js..."
open('../js/bundle-min.js', 'w').write('\n'.join(buffer))
print "Writing index.html..."
open('../index.html','w').write(str(soup))
