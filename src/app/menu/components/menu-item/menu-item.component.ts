import { Component, Input } from '@angular/core';
import { IMenuItem } from '../../interfaces/menu-item.interface';

@Component({
  selector: 'nomia-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent {
  @Input() item: IMenuItem;

  constructor() { }

}
