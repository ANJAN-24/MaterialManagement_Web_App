import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { NotificationServiceService } from './../Modules/shared/Service/notification-service.service';

@Injectable({
  providedIn: 'root',
})
export class JwtInterceptor implements HttpInterceptor {

  constructor(private notifi : NotificationServiceService ){}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    if (localStorage.getItem('username') && localStorage.getItem('token')) {
      req = req.clone({
        setHeaders: {
          Authorization: localStorage.getItem('token'),
        },
      });
    }

    return this.handler(next, req);
  }

  handler(next, req) {
    return next.handle(req).pipe(
      tap(
        (event) => {
          if (event instanceof HttpResponse) {

          }
        },
        (error: HttpErrorResponse) => {

          console.log(error);
           this.notifi.showNotification(error.toString(),"An Error occured")
        }
      )
    );
  }
}
