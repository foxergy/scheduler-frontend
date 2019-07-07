import { Component } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-survey-event-creation-page',
  templateUrl: './survey-event-creation-page.page.html',
  styleUrls: ['./survey-event-creation-page.page.scss'],
})
export class SurveyEventCreationPagePage {

  constructor(private location: Location) { }

  changeInterval(eventInterval: number){
    console.log(eventInterval);
  }

  goBack(){
    this.location.back();
  }

}
