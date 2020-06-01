import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { IMenuSection } from '../../interfaces/menu-section.interface';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'nomia-menu-section',
  templateUrl: './menu-section.component.html',
  styleUrls: ['./menu-section.component.scss']
})
export class MenuSectionComponent {
  @Input() section: IMenuSection;

  isOpen: boolean;

  constructor() { }

  toggle(): void {
    if (this.section.sections || this.section.items) {
      this.isOpen = !this.isOpen;
    }
  }

  trackByForSections(index: number): number {
    return index;
  }

  trackByForItems(index: number): number {
    return index;
  }
}
