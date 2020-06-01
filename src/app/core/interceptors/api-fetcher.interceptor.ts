import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpRequest, HttpHandler, HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';

@Injectable()
export class ApiFetcherInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const resolvedReq = req.clone({
      url: this.resolveApi(req.url)
    });

    return next.handle(resolvedReq);
  }
  // Mock server data
  // ===========
  private resolveApi(url: string): string {
    if (url.includes(':apiUrl:')) {
      url = url.replace(':apiUrl:', './assets/mock') + '.json';
    }
    return url;
  }

  // For real server data
  // ============
  // private resolveApi(url: string): string {
  //   if (url.includes(':apiUrl:')) {
  //     url = url.replace(':apiUrl:', environment.apiUrl);
  //   }
  //   return url;
  // }
}
