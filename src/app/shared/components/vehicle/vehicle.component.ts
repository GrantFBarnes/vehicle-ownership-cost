import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css'],
})
export class VehicleComponent implements OnInit {
  @Output() removeVehicleEvent = new EventEmitter<number>();

  @Input() id: number = 0;
  @Input() vehicle_count: number = 0;
  @Input() cost_per: string = 'month';
  @Input() years_owned: number = 5;
  @Input() gallon_fuel_cost: number = 4;
  @Input() miles_value: number = 10000;
  @Input() miles_time: string = 'year';

  name: string = '';

  buy_price: number = 25000;
  sell_price: number = 10000;
  mpg: number = 30;
  insurance_cost: number = 100;
  insurance_time: string = 'month';
  registration_cost: number = 150;
  registration_time: string = 'year';
  oil_change_cost: number = 40;
  oil_change_miles: number = 10000;
  tire_cost: number = 600;
  tire_miles: number = 50000;

  total_miles: number = 0;
  total_fuel_cost: number = 0;
  total_depreciation_cost: number = 0;
  total_insurance_cost: number = 0;
  total_registration_cost: number = 0;
  total_oil_change_cost: number = 0;
  total_tire_cost: number = 0;

  total_cost: number = 0;

  calculateCosts(): void {
    switch (this.miles_time) {
      case 'total':
        this.total_miles = this.miles_value;
        break;

      case 'year':
        this.total_miles = this.miles_value * this.years_owned;
        break;

      case 'month':
        this.total_miles = this.miles_value * this.years_owned * 12;
        break;

      case 'week':
        this.total_miles = this.miles_value * this.years_owned * 52;
        break;

      case 'day':
        this.total_miles = this.miles_value * this.years_owned * 365;
        break;

      default:
        this.total_miles = 0;
        break;
    }

    this.total_fuel_cost =
      (this.total_miles / this.mpg) * this.gallon_fuel_cost;
    this.total_oil_change_cost =
      (this.total_miles / this.oil_change_miles) * this.oil_change_cost;
    this.total_tire_cost =
      (this.total_miles / this.tire_miles) * this.tire_cost;

    this.total_depreciation_cost = this.buy_price - this.sell_price;

    switch (this.insurance_time) {
      case 'year':
        this.total_insurance_cost = this.insurance_cost * this.years_owned;
        break;

      case 'month':
        this.total_insurance_cost = this.insurance_cost * this.years_owned * 12;
        break;

      default:
        this.total_insurance_cost = 0;
        break;
    }

    switch (this.registration_time) {
      case 'year':
        this.total_registration_cost =
          this.registration_cost * this.years_owned;
        break;

      case 'month':
        this.total_registration_cost =
          this.registration_cost * this.years_owned * 12;
        break;

      default:
        this.total_registration_cost = 0;
        break;
    }

    this.total_cost =
      this.total_fuel_cost +
      this.total_depreciation_cost +
      this.total_insurance_cost +
      this.total_registration_cost +
      this.total_oil_change_cost +
      this.total_tire_cost;
  }

  constructor() {}

  ngOnInit(): void {
    this.calculateCosts();
  }

  ngOnChanges(): void {
    this.calculateCosts();
  }

  removeVehicle(): void {
    this.removeVehicleEvent.emit(this.id);
  }
}
