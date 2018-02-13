const vendors = require('./vendors')

const firefoxRegex = /^([\da-f]{4})-([\da-f]{4})-(.*)$/i
const chromeRegex = /(^.+) \(.*Vendor: ([\da-f]{4}) Product: ([\da-f]{4})\)$/i

function parseId(id) {
  if (firefoxRegex.test(id)) {
    const matches = id.match(firefoxRegex)
    return {
      name: matches[3],
      vendorId: matches[1],
      productId: matches[2]
    }
  } else if (chromeRegex.test(id)) {
    const matches = id.match(chromeRegex)
    return {
      name: matches[1],
      vendorId: matches[2],
      productId: matches[3]
    }
  }
}

function getGamepadInfo(input) {
  if (typeof input !== 'string') {
    if (input.id) {
      if (typeof input.id !== 'string') {
        throw new TypeError('The `id` property on the Gamepad instance is not a string!')
      }
      input = input.id
    } else {
      throw new TypeError('The object is missing the `id` property!')
    }
  }

  const data = parseId(input)
  if (!data) {
    return
  }

  const hexVendorId = parseInt(data.vendorId, 16)
  if (hexVendorId in vendors) {
    data.vendor = vendors[hexVendorId]
  }

  return data
}

exports.default = getGamepadInfo
module.exports = exports.default
