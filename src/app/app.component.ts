import { Component ,OnInit} from '@angular/core';
import { CommonService } from './common.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'myTestApp';
  constructor(private comm: CommonService){

  }
  ngOnInit(): void {
    this.getData();
  }
  getData(){
   this.comm.getData().pipe(map((item)=>{
    return item.data;
   }
   
    )).subscribe(data=>{
    this.title =data;
   })
  }
}
