/**
 * Battery interface detection
 *
 * @module utils
 */

import { ScryptedInterface } from "@scrypted/sdk";

/**
 * Scrypted battery/charger interfaces a device should expose, driven by the
 * properties it actually reports rather than a static device-type table.
 *
 * This ensures any battery camera that reports a `battery` level surfaces the
 * Battery tile (and the plugin's low-battery handling), even if its device
 * type isn't yet listed in the client's BATTERY_DEVICE_TYPES set.
 *
 * @param properties - Device properties from Eufy
 * @returns Battery and/or Charger interfaces, as applicable
 */
export function batteryInterfaces(properties: {
  battery?: number;
  chargingStatus?: number;
}): ScryptedInterface[] {
  const interfaces: ScryptedInterface[] = [];
  if (properties.battery !== undefined) {
    interfaces.push(ScryptedInterface.Battery);
  }
  if (properties.chargingStatus !== undefined) {
    interfaces.push(ScryptedInterface.Charger);
  }
  return interfaces;
}
