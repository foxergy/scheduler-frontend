import { Component } from '@angular/core';

@Component({
  selector: 'app-survey-event-creation-page',
  templateUrl: './survey-event-creation-page.page.html',
  styleUrls: ['./survey-event-creation-page.page.scss'],
})
export class SurveyEventCreationPagePage {

  constructor() { console.log("somthing is completely wrong")}

  changeInterval(eventInterval: number){
    console.log(eventInterval);
  }

}
