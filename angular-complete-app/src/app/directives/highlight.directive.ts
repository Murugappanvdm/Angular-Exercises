import { Directive,ElementRef,HostListener,Input } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {
@Input() highlight:string=""
  //elementRef would get the target elements referenc
  // <h1 [highlight]="data"> </h1> , in this case elementref would represent h1
  constructor(private el:ElementRef) { }

  @HostListener("mouseover")
  doSomething():void {
    console.log(this.highlight, "working")
      let element =   this.el.nativeElement
      element = element.children[1]
      let regex=/(good|excellent|great|super|extraordinary|satisfied)/
      if(regex.test(this.highlight.toLowerCase())) {
        console.log("got inside")
          element.style.color ="darkred"
          element.style.fontSize="26px"
      }
  }

  @HostListener("mouseleave")
  turnOriginal():void {
    let element = this.el.nativeElement.children[1]
    element.style.color ="rgb(54, 54, 54)"
    element.style.fontSize="16px"
  }
 
}