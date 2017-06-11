import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-prize',
  templateUrl: './prize.component.html',
  styleUrls: ['./prize.component.css']
})
export class PrizeComponent implements OnInit {

  sub: any;
  id: string;
  content: string;
  
  constructor(private db: AngularFireDatabase, private router: ActivatedRoute) {
    this.sub = this.router.params.subscribe((params:any) => {
        this.id = params['id'];
    })
  }

  ngOnInit(){
    //item.id
    this.db.object('/Prize/' + this.id)
      .subscribe(item =>{
        this.content = item.Content;
      })

      
  }

}
