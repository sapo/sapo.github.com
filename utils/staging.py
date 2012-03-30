# Bottle shim for staging the site

from bottle import route, run, static_file, HTTPError, response
import httplib, os.path

root = '..'

# Poor man's proxy
def proxy(path):
    conn = httplib.HTTPConnection("oss.sapo.pt")
    req = conn.request("GET", "/" + path)
    resp = conn.getresponse()
    if resp.status != 200:
        return HTTPError(404,"Could not retrieve remote file")
    else:
        buffer = resp.read()
    for h,v in resp.getheaders():
        # Skip potentially troublesome headers
        if h not in ['connection','cache-control','server','accept-ranges']:
            response.set_header(h,v)
    conn.close()
    return buffer

@route('/')
@route('/:fname#.*#')
def index(fname='index.html'):
    filename = os.path.abspath(os.path.join(root, fname.strip('/\\')))
    if os.path.exists(filename):
        return static_file(fname,root='..')
    else:
        return proxy(fname)

run(host='', port=8080)
