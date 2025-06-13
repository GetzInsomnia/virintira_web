const { createServer } = require('http');
const next = require('next');

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    if (!dev) {
      // Normalize the forwarded protocol header. Some proxies send values like
      // "https,http". Only the first value is relevant for determining the
      // original request scheme.
      const protoHeader = req.headers['x-forwarded-proto'];
      const proto = Array.isArray(protoHeader)
        ? protoHeader[0]
        : (protoHeader || '').split(',')[0].trim();
      const hostHeader = req.headers.host || '';
      const host = hostHeader.split(':')[0];

      // Only redirect when the request actually used HTTP. An undefined header
      // may mean the proxy already handled HTTPS.
      if (proto === 'http') {
        res.writeHead(301, { Location: `https://${hostHeader}${req.url}` });
        res.end();
        return;
      }

      if (host.toLowerCase() === 'www.virintira.com') {
        res.writeHead(301, {
          Location: `https://virintira.com${req.url}`,
        });
        res.end();
        return;
      }
    }

    handle(req, res);
  }).listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
  });
});
