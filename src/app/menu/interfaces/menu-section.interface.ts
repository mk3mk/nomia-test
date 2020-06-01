import { IMenuItem } from './menu-item.interface';

export interface IMenuSection {
  items: IMenuItem[];
  sections: IMenuSection[];
  name: string;
}
