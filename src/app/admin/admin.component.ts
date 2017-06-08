import { Component, OnInit } from '@angular/core';
import { BeaconAdminService } from '../services/beacon-admin.service';
import { BluetoothUtilsService } from '../services/bluetooth-utils.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html'
})
export class AdminComponent {

  connecting = false;
  connected = false;
  beaconVersion = '';
  batteryVoltage = 0;
  beaconUptime: number = null;
  beaconName = 'ng-beacon';
  beaconUrl = 'ngbeacon.io';
  debugLog = '';

  constructor(private beaconAdmin: BeaconAdminService, private bluetoothUtils: BluetoothUtilsService) {}

  connect() {
    this.connecting = true;
    this.beaconVersion = '';
    this.batteryVoltage = 0;
    this.beaconUptime = null;
    this.beaconAdmin.connect()
      .finally(() => {
        this.connecting = false;
      })
      .subscribe(() => {
        this.connected = true;
        this.beaconAdmin.uart.receive$.subscribe(value => this.debugLog += value);
        this.beaconAdmin.uart.lines$.subscribe(line => {
          if (line.startsWith('["~$",')) {
            const [_, battery, uptime, version] = JSON.parse(line);
            this.beaconVersion = version;
            this.batteryVoltage = battery;
            this.beaconUptime = uptime;
          }
        });
        this.beaconAdmin.uart.sendText(`\nprint(JSON.stringify(['~$',NRF.getBattery(),getTime()|0,process.env.VERSION]))\n`);
      });
  }

  disconnect() {
    this.beaconAdmin.disconnect();
    this.clearLog();
    this.connected = false;
  }

  clearLog() {
    this.debugLog = '';
  }

  reset() {
    this.beaconAdmin.uart.sendText('\nreset()\n');
  }

  get deviceName() {
    return this.beaconAdmin.deviceName;
  }

  uploadEddystone() {
    this.beaconAdmin.uploadEddystone({name: this.beaconName}, this.beaconUrl);
  }

  uploadIBeacon() {
    this.beaconAdmin.uploadIBeacon({name: this.beaconName});
  }

}
