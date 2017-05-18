import { Component, OnInit, NgZone } from '@angular/core';
import { BatteryLevelService } from './services/battery-level.service';
import { BluetoothCore } from '@manekinekko/angular-web-bluetooth';

@Component({
  selector: 'app-root',
  /*template: `
    <a href="#" (click)="getBatteryLevel()">Get Battery Level ({{batteryLevel || 'N/A'}}%)</a>
  `,*/
  templateUrl: 'app.component.html',
  providers: [ BatteryLevelService ]
})
export class AppComponent implements OnInit {

    batteryLevel: string = '--';
    device: any = {};

    constructor(
      public _zone: NgZone,
      public _batteryLevelService: BatteryLevelService
    ) {}

    ngOnInit() {
      this.getDeviceStatus();
      this.streamValues();
    }

    streamValues() {
      this._batteryLevelService.streamValues().subscribe(this.showBatteryLevel.bind(this));
    }

    getDeviceStatus() {
      this._batteryLevelService.getDevice().subscribe(
        (device) => {
          if(device) {
            console.log(device)
            this.device = device;
          }
          else {
            // device not connected or disconnected
            this.device = null;
            this.batteryLevel = '--';
          }
        }
      );
    }

    getFakeValue() {
      this._batteryLevelService.getFakeValue();
    }

    getBatteryLevel() {
      return this._batteryLevelService.getBatteryLevel().subscribe(this.showBatteryLevel.bind(this));
    }

    showBatteryLevel(value: number) {

      // force change detection
      this._zone.run( () =>  {
        console.log('Reading battery level %d', value);
        this.batteryLevel = ''+value;
      });
    }

  }