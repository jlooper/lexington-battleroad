import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {

ngOnInit(){
    if (!navigator.bluetooth) {
        alert ('Your browser does not support Web Bluetooth. Please visit it on a mobile device with Bluetooth enabled. Make sure you have enabled the Physical Web via the Chrome app on iOS, and that you are using a newer Android phone.');
    }
  }
}