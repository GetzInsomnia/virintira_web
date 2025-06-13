const assert = require('assert');
const { shouldRedirectToHttps } = require('../server');

const req = { headers: { 'x-forwarded-proto': 'https,http' } };
assert.strictEqual(shouldRedirectToHttps(req), false, 'should not redirect when header includes https');
console.log('mixed-header test passed');
