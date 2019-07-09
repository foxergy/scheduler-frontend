import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-calendar-element',
  templateUrl: './calendar-element.component.html',
  styleUrls: ['./calendar-element.component.scss'],
})
export class CalendarElementComponent{
  @Input() day: Date=null;
  @Input() time: TimeHelper=null;
  @Output() eventClick: EventEmitter<any> = new EventEmitter<any>();
  @Input() mouseDown:boolean = true;
  num: number = 0;

  constructor() {}

  selectEvent(x){
        this.eventClick.emit({day:this.day, time: this.time});
  }
}

export class TimeHelper{
  hour: string;
  minute: string;
}
