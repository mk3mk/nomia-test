import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpRequest, HttpHandler,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable()
export class ServerErrorInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      // retry(1),
      catchError((error: HttpErrorResponse) => {
        // if (error.status === 500) {}
        // if (error.status === 409) {}
        // if (error.status === 404) {}
        // if (error.status === 403) {}
        // if (error.status === 401) {}
        return throwError(error);
      })
    );
  }
}
