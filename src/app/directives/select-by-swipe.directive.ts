import { Directive, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSelectBySwipe]'
})
export class SelectBySwipeDirective {

  constructor( private renderer: Renderer2 ) { }


  @HostListener('touchmove', ['$event'])
  mouseLeaveEvent(event){
    event.preventDefault();
    const touch = event.touches[0];
    this.renderer.setStyle(document.elementFromPoint(touch.clientX, touch.clientY), 'backgroundColor', 'blue');

    event.stopPropagation();
  }

}
