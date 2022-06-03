import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.css'],
})
export class CalculateComponent implements OnInit {
  cost_per: string = 'month';
  years_owned: number = 5;
  gallon_fuel_cost: number = 4;
  miles_value: number = 50000;
  miles_time: string = 'total';

  vehicles: Set<number> = new Set([0]);
  max_vehicles: number = 6;
  last_id: number = 0;

  constructor() {}

  ngOnInit(): void {}

  addVehicle(): void {
    if (this.vehicles.size < this.max_vehicles) {
      this.last_id += 1;
      this.vehicles.add(this.last_id);
    }
  }

  removeVehicle(id: number): void {
    if (this.vehicles.size > 1) {
      this.vehicles.delete(id);
    }
  }
}
