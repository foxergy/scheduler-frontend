import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { User } from '../http/model/user';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class AuthenticationService{
    private headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    });
    
    constructor(private httpClient: HttpClient){}

    registerUser(user: User){
        let url= environment.apiUrl+'/user/register';
        return this.httpClient.post(url, JSON.stringify(user), {headers: this.headers});
    }

    login(username: string, password: string){
        const authorizedHeader = new HttpHeaders({
            Authorization: "Basic "+ window.btoa(username+ ':' + password),
            'Content-Type': "application/json",
            'Accept': 'text/plain'
        })
        return this.httpClient.get<any>(environment.apiUrl+'/user/login', {headers: authorizedHeader});

    }

    logout(){
        localStorage.removeItem('currentUser');
    }
}