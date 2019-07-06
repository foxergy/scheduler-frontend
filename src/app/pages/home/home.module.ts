import { KalendarComponent } from './../../components/kalendar/kalendar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { LoginRegistrationModalComponent } from 'src/app/components/login-registration-modal/login-registration-modal.component';
import { LoginFormComponent } from 'src/app/components/login-form/login-form.component';
import { RegistrationFormComponent } from 'src/app/components/registration-form/registration-form.component';
import { SearchByCodeModalComponent } from 'src/app/components/search-by-code-modal/search-by-code-modal.component';
import { AppService } from 'src/service/http/app.service';
import { NgCalendarModule } from 'ionic2-calendar';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ]),
    NgCalendarModule
  ],
  declarations: [
    HomePage, 
    LoginRegistrationModalComponent, 
    LoginFormComponent, 
    RegistrationFormComponent,
    SearchByCodeModalComponent,
    KalendarComponent
  ],
    providers: [ AppService ],
  entryComponents:[
    LoginRegistrationModalComponent, 
    SearchByCodeModalComponent
  ]
})
export class HomePageModule {}
