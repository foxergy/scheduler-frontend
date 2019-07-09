import { Component, Output, EventEmitter, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CreatedEventModalComponent } from '../created-event-modal/created-event-modal.component';
import { AppService } from 'src/service/http/app.service';
import { SurveyEvent } from 'src/service/http/model/survey-event';
import { environment } from 'src/environments/environment';
import { Schedule } from 'src/service/http/model/schedule';

@Component({
  selector: 'app-option-panel',
  templateUrl: './option-panel.component.html',
  styleUrls: ['./option-panel.component.scss'],
})
export class OptionPanelComponent {
  toggle:boolean = false;
  createdUUid: string;
  interval: number = 30;
  @Output() intervalChange: EventEmitter<number>= new EventEmitter;
  @Input() schedules: Array<any>=[];
  surveyEvent: SurveyEvent= {id: null, name: "", description: "", schedules: [], user: null}
  constructor(private modalController: ModalController, private appService: AppService){}

  async showSearchByCodeModal(){
    const modal = await this.modalController.create({
      component: CreatedEventModalComponent,
      componentProps: {
        uuid: this.createdUUid,
        url: environment.apiUrl+'/'+this.createdUUid
      },
      cssClass: 'modal-created-event'
    });
    return await modal.present();
  }
  
  intervalChanged(event: number){
    this.interval= event;
    this.intervalChange.emit(event);
  }

  postSurveyEvent(){
    let schedules: Array<Schedule>=[];
    this.schedules.forEach(element => {
      let year = element.day.getFullYear(); 
      let month = element.day.getMonth()+1;
      let dayInMonth = element.day.getDate();
      let hour = Number(element.time.hour);
      let minute = Number(element.time.minute);

      let totalminutes = hour*60 + minute+this.interval;
      let endHour = Math.floor(totalminutes/60);
      let endMinute = totalminutes-(60*endHour);

      
      let schedule: Schedule = new Schedule([year, month, dayInMonth, hour, minute],[year, month, dayInMonth, endHour, endMinute], null);
      schedules.push(schedule);
    });
    this.surveyEvent.schedules=schedules;

    new Promise(resolve=> setTimeout(()=>{
      this.appService.postSurveyEvent(this.surveyEvent).subscribe(
        response =>{
          this.createdUUid = response;
          console.log(response);
          resolve();
        }, error =>{
          console.log(error);
        }
      );
    }, 100)).then(()=>{
      console.log(this.createdUUid);
      this.showSearchByCodeModal()}
      )
  }
}
