import { Component, inject } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { CommonModule } from '@angular/common';
import { HousingService } from '../housing.service';
import { Housinglocation } from '../housinglocation';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  template: `
    <section>
    <form>
      <input type="text" placeholder="Filter by city">
      <button class="primary" type="button">Search</button>
    </form>
  </section>
  <section class="results">
  <app-housing-location *ngFor="let housinglocation of housingLocationList " [housinglocation]="housinglocation"></app-housing-location>
  <!-- <app-housing-location [housinglocation]="housingLocationList[0]"></app-housing-location>
<app-housing-location [housinglocation]="housingLocationList[1]"></app-housing-location>
<app-housing-location [housinglocation]="housingLocationList[2]"></app-housing-location> -->

  </section>
  `,
  styleUrl: './home.component.css',
})
export class HomeComponent {
  housingLocationList: Housinglocation[] = [];
  housingService: HousingService = inject(HousingService);

  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }
}
