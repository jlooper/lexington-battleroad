import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})

export class AppComponent implements OnInit {

message: string;

ngOnInit(){
  if (!navigator.bluetooth) {
        this.message = 'Your browser does not support Web Bluetooth. Please visit it on a mobile device with Bluetooth and the Physical Web enabled.';
    }
  }
}