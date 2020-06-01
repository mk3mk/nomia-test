import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, BehaviorSubject, EMPTY } from 'rxjs';
import { tap, delay, catchError } from 'rxjs/operators';

import { ServicesModule } from './services.module';
import { IMenuSection } from '../interfaces/menu-section.interface';
import { IMenuItem } from '../interfaces/menu-item.interface';
import { IMenuGetParams } from '../interfaces/menu-get-params.interface';
import { IMenuState } from '../interfaces/menu-state.interface';

const LOCAL_STORAGE_NAME = 'nomiaResolvedMenu';

@Injectable({
  providedIn: ServicesModule
})
export class MenuService {
  private savedMenu: IMenuSection[];
  readonly loadingState: IMenuState = {
    isLoading: true,
    error: false,
    items: null
  };
  readonly errorState: IMenuState = {
    isLoading: false,
    error: true,
    items: null
  };
  menu$ = new BehaviorSubject<IMenuState>(this.loadingState);

  constructor(
    private $http: HttpClient
  ) {
    this.initMenu();
  }

  // manual refresh from server
  public refresh(): void { this.initMenu({}, true); }

  public addSection(section) {
    const state = this.menu$.value.items;
    // findParentByIdAndPushSection(state, sectionParentId, section)
    this.save(state);
  }
  public addItem(item) {
    const state = this.menu$.value.items;
    // findParentByIdAndPushItem(state, sectionId, item)
    this.save(state);
  }
  public editSection(sectionId: number, section: IMenuSection) {
    const state = this.menu$.value.items;
    // same as addFunc
    // Object.assign(findedSection, section)
    this.save(state);
  }
  public editItem(itemId: number, item: IMenuItem) {
    const state = this.menu$.value.items;
    // same as addFunc
    // Object.assign(findedItem, item)
    this.save(state);
  }
  public removeItem(itemId: number) {
    // find by id, splice array and update state
  }
  public removeSection(sectionId: number) {
    // find by id, splice array and update state
  }

  private initMenu(params?: IMenuGetParams, manual?: boolean): void {
    if (!manual && this.restore()) { return; } else { this.clear(); }
    this.menu$.next(this.loadingState);
    this.$http.get<IMenuSection[]>(':apiUrl:/menu')
      .pipe(
        delay(1500),
        catchError((err) => {
          this.menu$.next(this.errorState);
          this.clear();
          return EMPTY;
        })
      ).subscribe(this.save.bind(this));
  }

  private restore(): boolean {
    // TODO: check app version for reset saved value on version bump
    // if (version outdated) { return false; }
    const menuJSON = localStorage.getItem(LOCAL_STORAGE_NAME); // === null if empty
    if (menuJSON !== null) {
      try {
        const menuItems = JSON.parse(menuJSON);
        this.save(menuItems);
      } catch (error) {
        // TODO: if json is corrupted then restore default options
        return false;
      }
    }
    return menuJSON !== null;
  }

  private save(newMenu: IMenuSection[]): void {
    if (!newMenu) { return; }
    const menuJSON = JSON.stringify(newMenu);
    this.savedMenu = newMenu;
    localStorage.setItem(LOCAL_STORAGE_NAME, menuJSON);
    this.menu$.next({
      isLoading: false,
      error: false,
      items: newMenu
    });
  }

  private clear(): void {
    localStorage.removeItem(LOCAL_STORAGE_NAME);
  }
}
