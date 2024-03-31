import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { addAction, removeAction } from '../../Store/user.actions';

@Component({
  selector: 'app-action-user',
  templateUrl: './action-user.component.html',
  styleUrl: './action-user.component.scss'
})
export class ActionUserComponent {
  constructor(private store: Store){}
  addtoCard(){
  this.store.dispatch( addAction())
  }
  removetoCard(){
    this.store.dispatch( removeAction())
  }
}
