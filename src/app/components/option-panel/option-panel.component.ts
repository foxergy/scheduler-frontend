import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-option-panel',
  templateUrl: './option-panel.component.html',
  styleUrls: ['./option-panel.component.scss'],
})
export class OptionPanelComponent {
  toggle:boolean = false;

  @Output() intervalChange: EventEmitter<number>= new EventEmitter;

  intervalChanged(event: number){
    this.intervalChange.emit(event);
  }
}
