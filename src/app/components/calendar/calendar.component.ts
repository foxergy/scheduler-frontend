import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CalendarService } from 'src/service/local/calendar.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent{

  @Input() granularity: number = 30;
  currentWeek: Array<Date>=[];
  weekDayAbbrevations: Array<string>=[];
  hoursArray:Array<TimeHelper>=[];
  selectBySwipe: boolean=false;
  mouseDown:boolean = false;
  @Output() selectedSchedule: EventEmitter<any>= new EventEmitter<any>();

  constructor(private calendarService: CalendarService) {
    this.currentWeek = calendarService.getNextWeekOfDates(new Date);
    this.currentWeek.forEach(date => this.weekDayAbbrevations.push(this.calendarService.getDayAbbreviationDE(date.getDay())));
    this.getArrayForHours();
   }

   ngOnChanges(changes) {
    this.getArrayForHours();
  }

  getEvent($event: any){
    this.selectedSchedule.emit($event);
  }

  getArrayForHours(){
    let numbers: Array<TimeHelper> =[];
    let numberOfRows= 1440/this.granularity;
    let currentIndex = 0;
    for(let i=0; i<numberOfRows; i++){
      let fullHours =  Math.floor(currentIndex/60);
      let fullMinutes = currentIndex-(fullHours*60);
      let timeHelper = {hour: (fullHours < 10)?'0'+fullHours:''+fullHours, minute: (fullMinutes<10)?'0'+fullMinutes:''+fullMinutes}
      currentIndex += this.granularity;
      numbers.push(timeHelper);
    }
    this.hoursArray= numbers;
  }
 
  getCurrentMonth(){
    return this.calendarService.getMonthTextDE(this.currentWeek[0].getMonth());
  }

  getCurrentWeek(){
    return this.calendarService.getCurrentWeek(this.currentWeek[0]);
  }

  nextWeek(){
    this.currentWeek =  this.calendarService.getNextWeekOfDates(this.currentWeek[this.currentWeek.length-1]);
    this.updateAbbrevations();
  }

  previousWeek(){
    this.currentWeek =  this.calendarService.getPreviousWeekOfDates(this.currentWeek[0]);
    this.updateAbbrevations();
  }
  
  nextMonth(){
    this.currentWeek =  this.calendarService.getNextMonthOfWeekDates(this.currentWeek[this.currentWeek.length-1]);
    this.updateAbbrevations();
  }

  previousMonth(){
    this.currentWeek =  this.calendarService.getPreviousMonthOfDates(this.currentWeek[0]);
    this.updateAbbrevations();
  }

  updateAbbrevations(){
    let newWeekDayAbbrevation = [];
    this.currentWeek.forEach(date => {
      newWeekDayAbbrevation.push(this.calendarService.getDayAbbreviationDE(date.getDay()));
      this.weekDayAbbrevations= newWeekDayAbbrevation;
    });
  }
}

export class TimeHelper{
  hour: string;
  minute: string;
}
