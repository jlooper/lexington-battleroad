import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/bufferCount';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html'
})
export class ProgressComponent {
  locales: FirebaseListObservable<any[]>;
  votingRecord;
  public seriesData: Observable<number[]>;

constructor(private db: AngularFireDatabase) { 
    //this.loadVotingRecord();
    this.locales = this.db.list('/Locales');
    this.locales.subscribe(queriedItems => {
        for (let prop in queriedItems){
            this.locales[prop] = queriedItems[prop];
        }  
    });
}
 

  private loadVotingRecord() {
    this.votingRecord = localStorage.getItem("votingRecord");
    if (this.votingRecord) {
      this.votingRecord = JSON.parse(this.votingRecord);
    } else {
      this.votingRecord = {};
    }
  }

}
