import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SurveyEventsPage } from './survey-events.page';
import { AppService } from 'src/service/http/app.service';

const routes: Routes = [
  {
    path: '',
    component: SurveyEventsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  providers:[AppService],
  declarations: [SurveyEventsPage]
})
export class SurveyEventsPageModule {}
