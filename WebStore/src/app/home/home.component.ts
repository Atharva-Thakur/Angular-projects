import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from '../item/item.component';
import { Item } from '../item';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,ItemComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  items: Item[] = [
    {
      id: 1,
      image: 'https://cdn.thewirecutter.com/wp-content/media/2023/06/businesslaptops-2048px-0943.jpg',
      name: 'Item 1',
      price: 100,
      rating: 4.5
    },
    {
      id: 2,
      image: 'assets/images/2.jpg',
      name: 'Item 2',
      price: 200,
      rating: 4.0
    },
    {
      id: 3,
      image: 'assets/images/3.jpg',
      name: 'Item 3',
      price: 300,
      rating: 3.5
    },
    {
      id: 4,
      image: 'assets/images/4.jpg',
      name: 'Item 4',
      price: 400,
      rating: 3.0
    },
    {
      id: 5,
      image: 'assets/images/5.jpg',
      name: 'Item 5',
      price: 500,
      rating: 2.5
    },
    {
      id: 6,
      image: 'assets/images/6.jpg',
      name: 'Item 6',
      price: 600,
      rating: 2.0
    }
  ];
}
