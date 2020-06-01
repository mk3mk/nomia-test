import { IMenuSection } from './menu-section.interface';

export interface IMenuState {
  isLoading: boolean;
  error: boolean; // TODO: extend for error types
  items: IMenuSection[];
}
