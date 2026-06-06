/**
 * Device detection / capability tests
 */
import { DeviceType } from "../../src/device/constants";
import {
  hasBattery,
  getDeviceCapabilities,
} from "../../src/utils/device-detection";

describe("device capability detection", () => {
  describe("hasBattery", () => {
    it("returns true for the SoloCam 4G S330 (T86P2, type 111)", () => {
      // Regression: type 111 was defined in the enum but missing from
      // BATTERY_DEVICE_TYPES, so its battery level never surfaced.
      expect(hasBattery(DeviceType.CAMERA_4G_S330)).toBe(true);
    });

    it("still returns true for the SoloCam S340 (OUTDOOR_PT_CAMERA, type 48)", () => {
      expect(hasBattery(DeviceType.OUTDOOR_PT_CAMERA)).toBe(true);
    });
  });

  describe("getDeviceCapabilities", () => {
    it("reports battery capability for the SoloCam 4G S330", () => {
      expect(getDeviceCapabilities(DeviceType.CAMERA_4G_S330).battery).toBe(
        true,
      );
    });
  });
});
