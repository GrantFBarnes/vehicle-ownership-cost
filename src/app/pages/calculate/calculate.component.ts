import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.css'],
})
export class CalculateComponent implements OnInit {
  years_owned: number = 5;
  gallon_fuel_cost: number = 4;
  miles_value: number = 10000;
  miles_time: string = 'year';

  vehicles: number[] = [0];

  constructor() {}

  ngOnInit(): void {}

  addVehicle(): void {
    if (this.vehicles.length < 10) {
      this.vehicles.push(this.vehicles.length);
    }
  }
}
