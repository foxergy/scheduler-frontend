import { NgModule } from '@angular/core';
import { SurveyEventCreationPagePage } from './survey-event-creation-page.page';
import { OptionPanelComponent } from 'src/app/components/option-panel/option-panel.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from 'src/app/components/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  declarations: [SurveyEventCreationPagePage, OptionPanelComponent, HeaderComponent],
  exports:[HeaderComponent]
})
export class SurveyEventCreationPagePageModule {}
