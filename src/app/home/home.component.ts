import { Component, OnInit, NgZone } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { NgBeaconService } from '../services/beacon-admin.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import {DomSanitizer} from '@angular/platform-browser';
import { BeaconService } from '../services/beacon.service';
import { BluetoothCore } from '@manekinekko/angular-web-bluetooth';

//todo combine all beacon services

@Component({
  selector: 'home',
  templateUrl: 'home.component.html',
  providers: [ BeaconService ]
})

export class HomeComponent implements OnInit {

  connecting = false;
  connected = false;
  items: FirebaseListObservable<any[]>;
  cleanedImage: any;
  private sub:any;
  device: any = {};
  
  constructor(private ngBeacon: NgBeaconService, 
    private sanitizer: DomSanitizer, 
    private db: AngularFireDatabase, 
    private activatedRoute: ActivatedRoute, 
    private router: Router,
    public _zone: NgZone,
    public _beaconService: BeaconService ) {}

ngOnInit(){
    this.getDeviceStatus();
    this.items = this.db.list('/Locales');
    //todo sanitize images
  }

getDeviceStatus() {
      this._beaconService.getDevice().subscribe(
        (device) => {
          if(device) {
            //get the name
            console.log(device.name)
            this.router.navigate(['/locale',device.name]);
            this.device = device;
          }
          else {
            // device not connected or disconnected
            this.device = null;
          }
        }
      );
    }    

connect() {
    this.connecting = true;
    this.ngBeacon.connect()
      .finally(() => {
        this.connecting = false;
      })
      .subscribe(() => {
        this.connected = true;
        this.ngBeacon.uart.lines$.subscribe(line => {
          if (line.startsWith('["~$",')) {
            const [_, battery, uptime, version] = JSON.parse(line);
          }
        });
        this.ngBeacon.uart.sendText(`\nprint(JSON.stringify(['~$',NRF.getBattery(),getTime()|0,process.env.VERSION]))\n`);
      });
  }

}