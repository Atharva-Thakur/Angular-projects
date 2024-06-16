import { Component, Input } from '@angular/core';
import {Item} from '../item';
import { CurrencyPipe } from '@angular/common';
@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemComponent {
  @Input() item!: Item;
}
