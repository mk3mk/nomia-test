import { Component, HostBinding } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { MenuService } from '../../services/menu.service';
import { MenuEditService } from '../../services/menu-edit.service';
import { IMenuSection } from '../../interfaces/menu-section.interface';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'nomia-edit-section',
  templateUrl: './edit-section.component.html',
  styleUrls: ['./edit-section.component.scss'],
  animations: [
    trigger(
      'initAnimation',
      [
        transition(
          ':enter', [
          style({ transform: 'translate3d(0, 100%, 0)' }),
          animate('300ms', style({ transform: 'translate3d(0, 0, 0)' }))
        ]),
        transition(
          ':leave', [
            style({ transform: 'translate3d(0, 0, 0)' }),
          animate('300ms', style({ transform: 'translate3d(0, 100%, 0)' })),
        ])
      ]
    )
  ]
})
export class EditSectionComponent {
  @HostBinding('@initAnimation') public animation = true;
  sections = this.$menu.menu$;

  form = new FormGroup({
    name: new FormControl('', [Validators.minLength(5), Validators.required]),
    sectionId: new FormControl(null),
    color: new FormControl('#fff')
  });
  initialData: IMenuSection; // if editing mode - pass data from service

  isSaving: boolean;

  constructor(
    private $menu: MenuService,
    private $edit: MenuEditService
  ) {}

  save(): void {
    this.isSaving = true;
    let observ: Observable<boolean>;
    if (this.initialData) {
      // save only changed fields
      // as any for do not change original interface
      // observ = this.$edit.editSection((this.initialData as any).id, this.form.value);
    } else {
      observ = this.$edit.addSection(this.form.value);
    }

    observ
      .pipe(
        finalize(() => this.isSaving = false)
      ).subscribe((res) => {
        if (res) {
          // close component or show message about successful result
        } else {
          // show error
        }
      });
  }
}
