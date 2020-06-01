import { Component, OnInit, HostBinding } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'nomia-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.scss'],
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
export class EditItemComponent implements OnInit {
  @HostBinding('@initAnimation') public animation = true;

  constructor() { }

  ngOnInit(): void {
  }

}
