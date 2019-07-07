import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SurveyEvent } from './model/survey-event';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AppService{
    url: string= environment.apiUrl+'/surveyEvent';

    constructor(public http: HttpClient) {
    }

    getSurveyEvents(): Observable<Array<SurveyEvent>>{
        return this.http.get<Array<SurveyEvent>>(this.url)
        .pipe( 
            tap(entities=> console.log('fetched  events')
        ));
    }
}