declare namespace getGamepadInfo {
  /** Information about a gamepad. */
  export interface GamepadInfo {
    /** The name of the gamepad. */
    name: string

    /** The USB vendor ID of the gamepad. */
    vendorId: string

    /** The name of the vendor. Only available for some vendors. */
    vendor: string

    /** The USB product ID of the gamepad. */
    productId: string
  }
}

/** Returns information about a gamepad. */
declare function getGamepadInfo(input: Gamepad | string): getGamepadInfo.GamepadInfo

export = getGamepadInfo
