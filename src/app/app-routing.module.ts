import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../service/security/guards/auth.guard';
import { HomePage } from './pages/home/home.page';
import { SurveyEventsPage } from './pages/survey-events/survey-events.page';
import { SurveyEventCreationPagePage } from './pages/survey-event-creation-page/survey-event-creation-page.page';
import { HomePageModule } from './pages/home/home.module';
import { SurveyEventsPageModule } from './pages/survey-events/survey-events.module';
import { SurveyEventCreationPagePageModule } from './pages/survey-event-creation-page/survey-event-creation-page.module';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePage },
  { path: 'survey-events', component: SurveyEventsPage, canActivate: [AuthGuard] },
  { path: 'survey-event-creation-page', component:SurveyEventCreationPagePage, canActivate: [AuthGuard] },


];

@NgModule({
  imports: [
    HomePageModule,
    SurveyEventsPageModule,
    SurveyEventCreationPagePageModule,
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
