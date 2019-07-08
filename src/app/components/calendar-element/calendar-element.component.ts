import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-calendar-element',
  templateUrl: './calendar-element.component.html',
  styleUrls: ['./calendar-element.component.scss'],
})
export class CalendarElementComponent{
  @Input() day: number=null;
  @Input() time: TimeHelper=null;
  @Output() eventClick: EventEmitter<string> = new EventEmitter<string>();
  @Input() mouseDown:boolean = true;
  num: number = 0;

  constructor() {}
}

export class TimeHelper{
  hour: string;
  minute: string;
}
