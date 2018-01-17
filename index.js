const firefoxRegex = /^([\da-f]{4})-([\da-f]{4})-(.*)$/i
const chromeRegex = /(^.+) \(.*Vendor: ([\da-f]{4}) Product: ([\da-f]{4})\)$/i

module.exports = input => {
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

  if (firefoxRegex.test(input)) {
    const matches = input.match(firefoxRegex)
    return {
      name: matches[3],
      vendorId: matches[1],
      productId: matches[2]
    }
  } else if (chromeRegex.test(input)) {
    const matches = input.match(chromeRegex)
    return {
      name: matches[1],
      vendorId: matches[2],
      productId: matches[3]
    }
  }
}
