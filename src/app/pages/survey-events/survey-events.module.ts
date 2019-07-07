import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SurveyEventsPage } from './survey-events.page';
import { AppService } from 'src/service/http/app.service';
import { SurveyEventCreationPagePageModule } from '../survey-event-creation-page/survey-event-creation-page.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SurveyEventCreationPagePageModule
  ],
  providers:[AppService],
  declarations: [SurveyEventsPage],
})
export class SurveyEventsPageModule {}
