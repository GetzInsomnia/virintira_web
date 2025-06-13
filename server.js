const { createServer } = require('http');
const next = require('next');

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

function getForwardedProto(headers) {
  const xfProto = headers['x-forwarded-proto'];
  if (xfProto) {
    const value = Array.isArray(xfProto) ? xfProto[0] : xfProto;
    return value.split(',')[0].trim().toLowerCase();
  }

  const forwarded = headers['forwarded'];
  if (forwarded) {
    const value = Array.isArray(forwarded) ? forwarded[0] : forwarded;
    const match = value.match(/proto=([^;]+)/i);
    if (match) {
      return match[1].split(',')[0].trim().toLowerCase();
    }
  }

  return undefined;
}

function shouldRedirectToHttps(req) {
  const proto = getForwardedProto(req.headers);
  return proto && !proto.includes('https');
}

if (require.main === module) {
  app.prepare().then(() => {
    createServer((req, res) => {
      if (!dev && shouldRedirectToHttps(req)) {
        const hostHeader = req.headers.host || '';
        res.writeHead(301, { Location: `https://${hostHeader}${req.url}` });
        res.end();
        return;
      }

      handle(req, res);
    }).listen(port, () => {
      console.log(`> Ready on http://localhost:${port}`);
    });
  });
}

module.exports = { getForwardedProto, shouldRedirectToHttps };
