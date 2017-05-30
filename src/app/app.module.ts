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

import { AppRouting } from './app.routing';

import { NgBeaconService } from './services/ng-beacon.service';
import { BluetoothUtilsService } from './services/bluetooth-utils.service';
import { BleUartService } from './services/ble-uart.service';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PoemComponent,
    LocaleComponent,
    ProgressComponent,
    MapComponent,
    AdminComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRouting,
    HttpModule,
    WebBluetoothModule.forRoot({
      enableTracing: true
    })
  ],
  providers: [NgBeaconService, BluetoothUtilsService, BleUartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
