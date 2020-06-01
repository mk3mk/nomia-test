import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

import { MenuRoutingModule } from './menu-routing.module';
import { MenuComponent } from './menu.component';
import { ServicesModule } from './services/services.module';
import { MenuSectionComponent } from './components/menu-section/menu-section.component';
import { MenuItemComponent } from './components/menu-item/menu-item.component';
import { EditSectionComponent } from './views/edit-section/edit-section.component';
import { EditItemComponent } from './views/edit-item/edit-item.component';


@NgModule({
  declarations: [
    MenuComponent,
    MenuSectionComponent,
    MenuItemComponent,
    EditSectionComponent,
    EditItemComponent
  ],
  imports: [
    CommonModule,
    MenuRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    ServicesModule
  ]
})
export class MenuModule { }
