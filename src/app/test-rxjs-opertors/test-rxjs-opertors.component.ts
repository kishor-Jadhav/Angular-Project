import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { concat, concatMap, delay, from, interval, map, of, take } from 'rxjs';

@Component({
  selector: 'app-test-rxjs-opertors',
  templateUrl: './test-rxjs-opertors.component.html',
  styleUrl: './test-rxjs-opertors.component.scss'
})
export class TestRxjsOpertorsComponent implements OnInit {
  resData: any;
  curr = 10;
  custpipe = 'custpipe ';
  constructor(private comm: CommonService) {

  }
  ngOnInit(): void {
    this.pipeOperator();
    this.formOperator();
    this.concatOpertor();
  }
//https://rxjs.dev/guide/operators
  //Pipe map
  pipeOperator() {
    this.comm.getData().pipe(map((item) => {
      return item.data;
    }

    )).subscribe(data => {
      this.resData = data;
    })
  }

  //form array -> observable
  formOperator() {
    const a = [10, 20, 30];
    const out = from(a);
    console.log("---From operator---")
    out.pipe(map(item => item + 10)).pipe(take(3)).subscribe(data => console.log(`From item - ${data}`));
    setTimeout(() => {
      console.log('after 1000')
    }, 1000);
  }

  // concat joins multiple Observables together, by subscribing to them one at a time and merging their results into the output Observable. You can pass either an array of Observables, or put them directly as arguments. Passing an empty array will result in Observable that completes immediately.

  // concat will subscribe to first input Observable and emit all its values, without changing or affecting them in any way. When that Observable completes, it will subscribe to then next Observable passed and, again, emit its values. This will be repeated, until the operator runs out of Observables. When last input Observable completes, concat will complete as well. At any given moment only one Observable passed to operator emits values. If you would like to emit values from passed Observables concurrently, check out merge instead, especially with optional concurrent parameter. As a matter of fact, concat is an equivalent of merge operator with concurrent parameter
  concatOpertor() {
    const timer1 = interval(1000).pipe(take(10));
    const timer2 = interval(2000).pipe(take(6));
    const timer3 = interval(500).pipe(take(10));

    const result = concat(timer1, timer2, timer3);
    result.subscribe(x => console.log(x));
    const arr1 = from([10]);
 
    console.log('-------')
   const res= arr1.pipe(
       concatMap(item=>this.fetchData(item)),
       concatMap(item=>this.processData(item)),
    )
    res.subscribe(x => console.log(x));
   
  }
  fetchData(input:any) {
    console.log(`First - ${input}`)
    return of(input+10) 
  }
  
  // Another mock function that simulates processing data, also returning an observable
   processData(input:any) {
    console.log(`Second - ${input}`)
    return of(input) 
  }
}
