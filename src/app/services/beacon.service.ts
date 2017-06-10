import { Injectable } from "@angular/core";
import { BluetoothCore } from "@manekinekko/angular-web-bluetooth";

@Injectable()
export class BeaconService {
  constructor(public ble: BluetoothCore) {}

  getDevice() {
    // call this method to get the connected device
    return this.ble.getDevice$();
  }
}
