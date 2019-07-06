import { Directive, ElementRef, HostListener, Renderer2, Input, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appSelectableByMouse]'
})
export class SelectableByMouseDirective {

  @Input('appSelectableByMouse') private mousedown:boolean;
  @Output() event: EventEmitter<any>= new EventEmitter();
  private marked: boolean=false;

  
  constructor(private element: ElementRef, private renderer: Renderer2) { 
    this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', 'yellow');
    this.renderer.setStyle(this.element.nativeElement, 'cursor', 'pointer');
    this.renderer.setStyle(this.element.nativeElement, '-webkit-touch-callout', 'none');
    this.renderer.setStyle(this.element.nativeElement, '-webkit-user-select', 'none');
    this.renderer.setStyle(this.element.nativeElement, '-khtml-user-select', 'none');
    this.renderer.setStyle(this.element.nativeElement, '-moz-user-select', 'none');
    this.renderer.setStyle(this.element.nativeElement, '-ms-user-select', 'none');
    this.renderer.setStyle(this.element.nativeElement, 'user-select', 'none');
  }

  @HostListener('mouseover', ['$event'])
    mouseOverEvent(event){
      event.preventDefault();
      event.stopPropagation();
      if(this.mousedown){
        this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', 'blue');
        this.marked= true;
      }
  }

  @HostListener('mouseenter', ['$event'])
  mouseEnterEvent(event){
    event.preventDefault();
    event.stopPropagation();
    if(this.mousedown){
      this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', 'blue');
      this.marked= true;
    }
  }

  @HostListener('mouseleave', ['$event'])
  mouseLeaveEvent(event){
    event.preventDefault();
    event.stopPropagation();
    if(this.mousedown){
      this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', 'blue');
      this.marked= true;
    }
  }

  @HostListener('click', ['$event'])
  mouseClickEvent(event){
    event.preventDefault();
    event.stopPropagation();
    this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', 'blue');
    this.marked= true;
  }
}

