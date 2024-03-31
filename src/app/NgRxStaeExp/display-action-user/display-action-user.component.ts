import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-display-action-user',
  templateUrl: './display-action-user.component.html',
  styleUrl: './display-action-user.component.scss'
})
export class DisplayActionUserComponent implements OnInit {
  cardCount = this.store.select('cardCount')
  getCardCount: any;
constructor( private store: Store<{cardCount:number}>){}
ngOnInit(): void {
    this.cardCount.subscribe((item:any)=>{
      console.log(item);
      this.getCardCount = item.countData.count;
    });
}
}
