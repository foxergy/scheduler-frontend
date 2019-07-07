import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpEvent, HttpRequest, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class BasicAuthInterceptor implements HttpInterceptor{

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if(currentUser && currentUser.authData){
            request = request.clone({
                setHeaders: {
                    Authorization: 'Basic '+currentUser.authData
                }
            });
        }
        return next.handle(request);
    }
}