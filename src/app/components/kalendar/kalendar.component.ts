import { Component, OnInit, ViewChild, Inject, LOCALE_ID } from '@angular/core';
import { CalendarComponent} from 'ionic2-calendar/calendar';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-kalendar',
  templateUrl: './kalendar.component.html',
  styleUrls: ['./kalendar.component.scss'],
})
export class KalendarComponent implements OnInit {

  eventSource = [];
  calendarTitle = '';
  isToday: boolean;

  calendar = {
    mode: 'week',
    currentDate: new Date(),
    timeInterval: 30
  };

  event = {
    title: '',
    startTime: '',
    endTime: '',
    allDay: false,
    description: '',
  };

  @ViewChild(CalendarComponent) Kalendar: CalendarComponent;

  constructor(private allertController: AlertController, @Inject(LOCALE_ID)private locale: string) {}

  ngOnInit() {
   }

  addEvent() {
    // ad new Event
  }

  onViewTitleChanged(title) {
    this.calendarTitle = title;
  }

  changeMode(mode) {
    this.calendar.mode = mode;
  }

  chagneInterval(interval: number) {
    this.calendar.timeInterval = interval;
  }

  back() {
    var swiper = document.querySelector('.swiper-container')['swiper'];
    swiper.slidePrev();
  }

  next() {
    var swiper = document.querySelector('.swiper-container')['swiper'];
    swiper.slideNext();
  }

  today() {
    this.calendar.currentDate = new Date();
  }

}
