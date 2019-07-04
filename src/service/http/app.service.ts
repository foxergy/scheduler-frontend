import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SurveyEvent } from './model/survey-event';
import { tap } from 'rxjs/operators';
import { User } from './model/user';

@Injectable({
    providedIn: 'root'
})
export class AppService{
    authenticated = false;
    url: string= 'https://localhost:8443/surveyEvent';
    token: string;
    authorizationHeaders: HttpHeaders;
    private headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    });
    constructor(public http: HttpClient) {
    }

    getSurveyEvents(): Observable<Array<SurveyEvent>>{
        return this.http.get<Array<SurveyEvent>>(this.url, {headers: this.authorizationHeaders})
        .pipe( 
            tap(entities=> console.log('fetched  events')
        ));
    }
  

    registerUser(user: User, callback){
        let url= 'https://localhost:8443/user/register';
        console.log(JSON.stringify(user));
        this.http.post(url, JSON.stringify(user), {headers: this.headers}).subscribe(response =>console.log("registered"));
        return callback && callback();
    }

    authenticate(credentials, callback) { 
          this.authorizationHeaders = new HttpHeaders(credentials ? {
              authorization : 'Basic ' + btoa(credentials.username + ':' + credentials.password)
          } : {});
  
          this.http.get(this.url, {headers: this.authorizationHeaders}).subscribe(response => {
              if (response['Status-Code']==200) {
                this.authenticated = true;
              } else {
                  this.authenticated = false;
              }
              return callback && callback();
          });
      }
}