import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html'
})
export class ProgressComponent {
  locales: FirebaseListObservable<any[]>;
  checkins: Array<any>;
  locale: Array<any>;
  
constructor(private db: AngularFireDatabase) { 
    this.locales = this.db.list('/Locales');
    this.locales.subscribe(queriedItems => {
        var checkins = [];
        var locale = [];
        queriedItems.forEach((item) => {
          checkins.push({ value: item.Checkins, color: "#AC0000" });
          locale.push(item.Name)
        });
        this.checkins = checkins;
        this.locale = locale;
        
    });
  } 

}
