import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SurveyEventCreationPagePage } from './survey-event-creation-page.page';
import { OptionPanelComponent } from 'src/app/components/option-panel/option-panel.component';

const routes: Routes = [
  {
    path: '',
    component: SurveyEventCreationPagePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SurveyEventCreationPagePage, OptionPanelComponent]
})
export class SurveyEventCreationPagePageModule {}
