jest.mock("@scrypted/sdk", () => ({
  ScryptedInterface: { Battery: "Battery", Charger: "Charger" },
}));

import { batteryInterfaces } from "../../../src/utils/battery-interfaces";

describe("batteryInterfaces", () => {
  it("adds Battery when the device reports a battery level (even without a type-table match)", () => {
    expect(batteryInterfaces({ battery: 2 })).toEqual(["Battery"]);
  });

  it("adds Charger when the device reports charging status", () => {
    expect(batteryInterfaces({ battery: 80, chargingStatus: 1 })).toEqual([
      "Battery",
      "Charger",
    ]);
  });

  it("adds nothing for a device with no battery/charging properties", () => {
    expect(batteryInterfaces({})).toEqual([]);
  });
});
