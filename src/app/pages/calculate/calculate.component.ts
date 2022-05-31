import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.css'],
})
export class CalculateComponent implements OnInit {
  years_owned: number = 5;
  miles_value: number = 10000;
  miles_time: string = 'year';
  gallon_fuel_cost: number = 4;

  buy_price: number = 25000;
  sell_price: number = 12500;
  mpg: number = 30;

  total_fuel_cost: number = 0;
  total_depreciation_cost: number = 0;
  total_cost: number = 0;

  constructor() {}

  modelChange(): void {
    let total_miles = 0;
    switch (this.miles_time) {
      case 'year':
        total_miles = this.miles_value * this.years_owned;
        break;

      case 'month':
        total_miles = this.miles_value * this.years_owned * 12;
        break;

      case 'week':
        total_miles = this.miles_value * this.years_owned * 52;
        break;

      default:
        break;
    }

    this.total_fuel_cost = (total_miles / this.mpg) * this.gallon_fuel_cost;

    this.total_depreciation_cost = this.buy_price - this.sell_price;

    this.total_cost = this.total_fuel_cost + this.total_depreciation_cost;
  }

  ngOnInit(): void {
    this.modelChange();
  }
}
