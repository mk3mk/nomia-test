import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu.component';
import { EditItemComponent } from './views/edit-item/edit-item.component';
import { EditSectionComponent } from './views/edit-section/edit-section.component';


const routes: Routes = [
  {
    path: '',
    component: MenuComponent,
    children: [
      { path: 'edit-section', component: EditSectionComponent },
      { path: 'edit-item', component: EditItemComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
