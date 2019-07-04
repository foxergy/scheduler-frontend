import { Component, OnInit } from '@angular/core';
import { SurveyEvent } from 'src/service/http/model/survey-event';
import { AppService } from 'src/service/http/app.service';

@Component({
  selector: 'app-survey-events',
  templateUrl: './survey-events.page.html',
  styleUrls: ['./survey-events.page.scss'],
})
export class SurveyEventsPage implements OnInit {

  events: Array<SurveyEvent>;

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.getSurveyEvents();
  }

  async getSurveyEvents(){
    new Promise(resolve=> setTimeout(()=>{
      this.appService.getSurveyEvents().subscribe(
        events => this.events=events);
      resolve();
    },50));
  }
}
