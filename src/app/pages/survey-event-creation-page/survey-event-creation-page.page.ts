import { Component } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-survey-event-creation-page',
  templateUrl: './survey-event-creation-page.page.html',
  styleUrls: ['./survey-event-creation-page.page.scss'],
})
export class SurveyEventCreationPagePage {
  granularity: number= 30;
  schedules: Array<any>=[];
  constructor(private location: Location) { }

  changeInterval(eventInterval: number){
    this.granularity= eventInterval;
  }

  goBack(){
    this.location.back();
  }

  addSchedule($event){
    this.schedules.push($event);
  }
}
