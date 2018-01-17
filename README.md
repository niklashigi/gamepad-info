# gamepad-info

> Retrieve information about a gamepad

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
  productId: '0719' }
```

* `name` is the user-friendly name of the gamepad.
* `vendorId` is the ID of the vendor.
* `productId` is the ID of the product  and might vary between browsers.

## License

MIT © [Niklas Higi](https://shroudedcode.com)

[gamepad-instance]: https://developer.mozilla.org/en-US/docs/Web/API/Gamepad
[gamepad-id-string]: https://developer.mozilla.org/en-US/docs/Web/API/Gamepad/id
