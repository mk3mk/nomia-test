import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ServerErrorInterceptor } from './interceptors/server-error.interceptor';
import { ApiFetcherInterceptor } from './interceptors/api-fetcher.interceptor';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ApiFetcherInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ServerErrorInterceptor, multi: true }
  ]
})
export class CoreModule { }
