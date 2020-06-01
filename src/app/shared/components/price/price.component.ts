import { Component, Input } from '@angular/core';

@Component({
  selector: 'nomia-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.scss']
})
export class PriceComponent {
  @Input() value: number;
  @Input() currencySymbol = '₽';
}
