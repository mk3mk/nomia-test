import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, EMPTY, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { ServicesModule } from './services.module';
import { MenuService } from './menu.service';

import { IMenuItem } from '../interfaces/menu-item.interface';
import { IMenuSection } from '../interfaces/menu-section.interface';

@Injectable({
  providedIn: ServicesModule
})
export class MenuEditService {

  constructor(
    private $menu: MenuService,
    private $http: HttpClient
  ) { }

  public addSection(value: { name: string, parentId?: number, color?: string }): Observable<boolean> {
    // validate value and continue
    // remove =====
    return of(true);
    // remove =====
    return this.$http.post<IMenuSection[]>(':apiUrl:/menu/section', value).pipe(
      catchError(err => EMPTY),
      tap((res) => {
        if (res) { this.$menu.addSection(res); } // mutate state
      }),
      map(res => !!res)
    );
  }
  public addItem(value: { name: string, sectionId?: number, sale: number }): Observable<boolean> {
    // validate value and continue
    // remove =====
    return of(true);
    // remove =====
    return this.$http.post<IMenuSection[]>(':apiUrl:/menu/item', value).pipe(
      catchError(err => EMPTY),
      tap((res) => {
        if (res) { this.$menu.addItem(res); } // mutate state
      }),
      map(res => !!res)
    );
  }
  public editSection(sectionId: number, changes: { name?: string; color?: string; parentId?: number }) { }
  public editItem(index: number, item: IMenuItem) { }
  public removeItem(index: number) { }
  public removeSection(index: number) { }
}
