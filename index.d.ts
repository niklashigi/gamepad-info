interface GamepadInfo {
  /** The name of the gamepad. */
  name: string

  /** The USB vendor ID of the gamepad. */
  vendorId: string

  /** The USB product ID of the gamepad. */
  productId: string
}

/** Returns information about a gamepad. */
export default function(input: Gamepad | string): GamepadInfo
