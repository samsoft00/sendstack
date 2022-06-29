![](https://github.com/samsoft00/sendstack/blob/main/logo.svg "Sendstack Logo")

# JavaScript API Client for [Sendstack Africa](https://www.sendstack.africa)

## Installation

**This library relies on the global fetch API. To use this library with
Node.js, [node-fetch](https://github.com/node-fetch/node-fetch) is required.**

For compatibility with Node.js versions < 12, please also install
the [globalThis polyfill](https://github.com/es-shims/globalThis).

### Via NPM

```bash
npm install sendstack
```

### Via Yarn

```bash
yarn add sendstack
```

### Browser

```html
<script src='https://unpkg.com/browse/sendstack/dist/Sendstack.umd.js'></script>
```

## Example

```javascript
// const globalThis = require('globalthis')(); // uncomment if NodeJS < NodeJS versions < 12
// globalThis.fetch = require('node-fetch').default; // uncomment in NodeJS environments
// const SendstackClient = require('sendstack-client'); // uncomment in NodeJS environments

new SendstackClient("MY_SENDSTACK_APP_SECRET", "APP_ID")
    .walletBalance()
	.then(balance => console.log(`Current balance: ${balance}`))
	.catch(console.error);
```

## Tests

1. `git clone https://github.com/samsoft00/sendstack`
2. `cd sendstack && npm install`
3. `APP_SECRET=InsertSendstackApiKey npm run test`

Set `SENDSTACK_LIVE_TEST=1` for live tests performing actual HTTP requests.

Set `SENDSTACK_DEBUG=1` for details printed to `stdout`.

### Support

Need help? Feel free to [contact us](https://www.sendstack.africa/).

[![MIT](https://img.shields.io/badge/License-MIT-teal.svg)](LICENSE)
