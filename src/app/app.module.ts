import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PoemComponent } from './poem/poem.component';
import { WebBluetoothModule } from '@manekinekko/angular-web-bluetooth';
import { AppRouting } from './app.routing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LocaleComponent } from './locale/locale.component';
import { ProgressComponent } from './progress/progress.component';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PoemComponent,
    LocaleComponent,
    ProgressComponent,
    MapComponent
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
