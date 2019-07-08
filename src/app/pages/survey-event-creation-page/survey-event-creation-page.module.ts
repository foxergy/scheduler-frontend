import { NgModule } from '@angular/core';
import { SurveyEventCreationPagePage } from './survey-event-creation-page.page';
import { OptionPanelComponent } from 'src/app/components/option-panel/option-panel.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { CalendarComponent } from 'src/app/components/calendar/calendar.component';
import { SelectBySwipeDirective } from 'src/app/directives/select-by-swipe.directive';
import { SelectableByMouseDirective } from 'src/app/directives/selectable-by-mouse.directive';
import { CalendarService } from 'src/service/local/calendar.service';
import { CalendarElementComponent } from 'src/app/components/calendar-element/calendar-element.component';
import { CreatedEventModalComponent } from 'src/app/components/created-event-modal/created-event-modal.component';
import { TextfieldWithIconComponent } from 'src/app/components/textfield-with-icon/textfield-with-icon.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  providers: [CalendarService],
  declarations: [SurveyEventCreationPagePage, 
    OptionPanelComponent,
     HeaderComponent, 
     CalendarComponent, 
     SelectBySwipeDirective, 
     SelectableByMouseDirective, 
     CalendarElementComponent,
     TextfieldWithIconComponent, 
     CreatedEventModalComponent],
     entryComponents:[
      CreatedEventModalComponent],
  exports:[HeaderComponent]
})
export class SurveyEventCreationPagePageModule {}
