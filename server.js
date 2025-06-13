const { createServer } = require('http');
const next = require('next');

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    if (!dev) {
      const protoHeader = req.headers['x-forwarded-proto'];
      const proto = Array.isArray(protoHeader) ? protoHeader[0] : protoHeader;
      const hostHeader = req.headers.host || '';
      const host = hostHeader.split(':')[0];

      if (proto && proto !== 'https') {
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
