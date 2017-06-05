import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-locale',
  templateUrl: './locale.component.html'
})
export class LocaleComponent implements OnInit {

  sub: any;
  id: string;
  item: any;

  name: string;
  content: string;
  source: string;
  
  
  constructor(private db: AngularFireDatabase, private router: ActivatedRoute) {
    this.sub = this.router.params.subscribe((params:any) => {
        this.id = params['id'];
    })
  }

  ngOnInit(){
    //item.id
    this.db.object('/Locales/' + this.id)
      .subscribe(item =>{
        this.name = item.Name;
        this.content = item.Content;
        this.source = item.Source;
      })
  }
  
  
}

