const {expect} = require('chai')
const {describe, it} = require('mocha')
const g = require('./')

describe('The `gamepad-info` package', () => {
  it('should export a function', () => {
    expect(g).to.be.a('function')
  })

  it('should throw when a non-gamepad object is passed in', () => {
    expect(() => g({})).to.throw()
  })

  describe('should, when called with an ID string in the style of', () => {
    for (const [browser, input] of [
      ['Firefox', '045e-0719-Xbox 360 Wireless Receiver'],
      ['Chrome / Chromium', 'Xbox 360 Wireless Receiver (Vendor: 045e Product: 0719)']
    ]) {
      describe(browser, () => {
        const result = g(input)

        it('correctly extract the vendor ID', () => {
          expect(result.vendorId).to.equal('045e')
        })

        it('correctly extract the product ID', () => {
          expect(result.productId).to.equal('0719')
        })

        it('correctly extract the name', () => {
          expect(result.name).to.equal('Xbox 360 Wireless Receiver')
        })
      })
    }
  })
})
