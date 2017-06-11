import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { WebBluetoothModule } from '@manekinekko/angular-web-bluetooth';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PoemComponent } from './poem/poem.component';
import { LocaleComponent } from './locale/locale.component';
import { ProgressComponent } from './progress/progress.component';
import { MapComponent } from './map/map.component';
import { AdminComponent } from './admin/admin.component';
import { AboutComponent } from './about/about.component';
import { PrizeComponent } from './prize/prize.component';

import { AppRouting } from './app.routing';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth, AngularFireAuthProvider } from 'angularfire2/auth';

import { BeaconAdminService } from './services/beacon-admin.service';
import { BluetoothUtilsService } from './services/bluetooth-utils.service';
import { BleUartService } from './services/ble-uart.service';

import { ChartsModule } from '@progress/kendo-angular-charts';

import 'hammerjs';

export const config = {
    apiKey: "AIzaSyAxYm_ja9JoJpr7J9332QIYAuTf-3a6i2E",
    authDomain: "beacons-238ff.firebaseapp.com",
    databaseURL: "https://beacons-238ff.firebaseio.com",
    projectId: "beacons-238ff",
    storageBucket: "beacons-238ff.appspot.com",
    messagingSenderId: "794598895354"
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PoemComponent,
    LocaleComponent,
    ProgressComponent,
    MapComponent,
    AdminComponent,
    AboutComponent,
    PrizeComponent  
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRouting,
    HttpModule,
    WebBluetoothModule.forRoot({
      enableTracing: true
    }),
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    ChartsModule   
  ],
  providers: [BeaconAdminService, BluetoothUtilsService, BleUartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
