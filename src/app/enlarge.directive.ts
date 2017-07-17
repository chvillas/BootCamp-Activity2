import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appEnlarge]'
})
export class EnlargeDirective {
  
@HostListener('mouseenter')onMouseEnter(){
this.bigger("aquamarine")
}
 
@HostListener('mouseleave')onMouseLeave(){
this.elementRef.nativeElement.style.fontSize = '1em';
this.elementRef.nativeElement.style.background = null;
}
 
constructor(private elementRef: ElementRef) { }
 
bigger(color: string){
this.elementRef.nativeElement.style.fontSize = '35px';
}
 

}
