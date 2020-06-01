import { Component } from '@angular/core';
import { MenuService } from './services/menu.service';

@Component({
  selector: 'nomia-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  menu$ = this.$menu.menu$;
  isLoading = true;
  isFailed = false;

  constructor(private $menu: MenuService) {}

  refresh(): void {
    this.$menu.refresh();
  }

  trackByForSections(index: number): number {
    return index;
  }

  addSection(): void {

  }

  addItem(): void {}
}
