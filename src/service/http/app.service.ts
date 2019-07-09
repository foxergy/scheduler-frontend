import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SurveyEvent } from './model/survey-event';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from './model/user';

@Injectable({
    providedIn: 'root'
})
export class AppService{
    url: string= environment.apiUrl+'/surveyEvent';

    constructor(public http: HttpClient) {
    }

    getSurveyEventsByUser(): Observable<Array<SurveyEvent>>{
        let user: User = JSON.parse(localStorage.getItem('currentUser'));
        return this.http.get<Array<SurveyEvent>>(this.url+'/user/'+user.username)
        .pipe( 
            tap(entities=> console.log('fetched  events')
        ));
    }

    postSurveyEvent(surveyEvent: SurveyEvent): Observable<string>{
        let user: User = JSON.parse(localStorage.getItem('currentUser'));
        return this.http.post(this.url+'/user/'+user.username, surveyEvent, {responseType:'text' as 'text'}).pipe( 
            tap(response=> console.log('created event with uuid:'+response)
        ));;
    }
}