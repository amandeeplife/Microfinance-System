import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import {Observable} from "rxjs";
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(private authService:AuthService){

  }

intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  req = req.clone({
    setHeaders: {
      Authorization: `Bearer ${localStorage.get(this.authService.getToken())}`
    }
  });

  return next.handle(req);
}
}