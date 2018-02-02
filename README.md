# gamepad-info

> Retrieve information about a gamepad

[![build status][build-badge]][build-link]
[![npm][npm-badge]][npm-link]

## Installation

```
$ npm install gamepad-info
```

## Example

```js
const getGamepadInfo = require('gamepad-info')

const gamepad = navigator.getGamepads()[0]
const gamepadName = getGamepadInfo(gamepad).name
console.log(`Your gamepad is called "${gamepadName}".`)
```

## API

### getGamepadInfo(input)

Takes in a [`Gamepad` instance][gamepad-instance] or a [`gamepad.id` string][gamepad-id-string] and returns an object like this:

```js
{ name: 'Xbox 360 Wireless Receiver',
  vendorId: '045e',
  vendor: 'microsoft',
  productId: '0719' }
```

* `name` is the user-friendly name of the gamepad.
* `vendorId` is the ID of the vendor.
* `vendor` is the vendor's name and only available for [some vendors](vendors.js).
* `productId` is the ID of the product  and might vary between browsers.

## License

MIT © [Niklas Higi](https://shroudedcode.com)

[gamepad-instance]: https://developer.mozilla.org/en-US/docs/Web/API/Gamepad
[gamepad-id-string]: https://developer.mozilla.org/en-US/docs/Web/API/Gamepad/id

[build-badge]: https://img.shields.io/travis/shroudedcode/gamepad-info.svg?style=flat-square
[build-link]: https://travis-ci.org/shroudedcode/gamepad-info

[npm-badge]: https://img.shields.io/npm/v/gamepad-info.svg?style=flat-square
[npm-link]: https://www.npmjs.com/package/gamepad-info
