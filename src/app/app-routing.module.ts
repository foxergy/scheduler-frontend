import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'survey-events', loadChildren: './pages/survey-events/survey-events.module#SurveyEventsPageModule' },
  { path: 'survey-event-creation-page', loadChildren: './pages/survey-event-creation-page/survey-event-creation-page.module#SurveyEventCreationPagePageModule' },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
