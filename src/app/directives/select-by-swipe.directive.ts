import { Directive, HostListener, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appSelectBySwipe]'
})
export class SelectBySwipeDirective {
  @Input('appSelectBySwipe') active: boolean;

  constructor( private renderer: Renderer2 ) { }

//TODO ONLY CHANGE COLOR OF SPECIFIC CLASS 
  @HostListener('touch', ['$event'])
  touchEvent(event){
    if(this.active){
      event.preventDefault();
      const touch = event.touches[0];

      let element= document.elementFromPoint(touch.clientX, touch.clientY)

      if(element.classList.contains('selected')){
        this.renderer.removeClass(document.elementFromPoint(touch.clientX, touch.clientY), 'selected');
      }
      event.stopPropagation();
    }
  }

  @HostListener('touchmove', ['$event'])
  touchMoveEvent(event){
    if(this.active){
      event.preventDefault();
      const touch = event.touches[0];

      let element= document.elementFromPoint(touch.clientX, touch.clientY)

      if(element.classList.contains('touchable')){
        this.renderer.addClass(document.elementFromPoint(touch.clientX, touch.clientY), 'selected');
      }
      
      event.stopPropagation();
    }
  }
}
