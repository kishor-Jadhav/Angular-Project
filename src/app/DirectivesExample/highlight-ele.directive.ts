import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlightEle]'
})
export class HighlightEleDirective implements OnInit {
  @Input('appHighlightEle') appcolor: string = 'Red';
  constructor(private el:ElementRef) { }
  ngOnInit(): void {
        this.el.nativeElement.style.backgroundColor = this.appcolor;
   
  }
}
