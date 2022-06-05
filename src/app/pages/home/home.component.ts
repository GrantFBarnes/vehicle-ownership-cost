import { Component, OnInit } from '@angular/core';
import { KeyValue } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  general_info: { [id: string]: any } = {
    'view-cost': {
      order: 1,
      name: 'View Cost',
      description:
        'Choose how you want the final cost results to be displayed. This can be the total lifetime cost, the cost broken up into smaller time frames (per year/month/day), or the cost per mile.',
    },
    'years-owned': {
      order: 2,
      name: 'Years Owned',
      description:
        'Define how many years you have owned, or plan to own a vehicle.',
    },
    'gallon-of-fuel': {
      order: 3,
      name: 'Gallon of Fuel ($)',
      description:
        'Estimate the average cost of fuel per gallon over the lifetime of the vehicle ownership.',
    },
    miles: {
      order: 4,
      name: 'Miles',
      description:
        'Define how many miles the vehicles will drive. This can be defined in total or broken up by time frame (per year/month/week/day).',
    },
  };

  vehicle_info: { [id: string]: any } = {
    name: {
      order: 1,
      name: 'Name',
      description:
        'Provide an optional name to help keep track of what vehicle you are currently defining to help with vehicle comparisons.',
    },
    'buy-price': {
      order: 2,
      name: 'Buy Price ($)',
      description:
        'Enter the price in dollars that it costs to buy this vehicle.',
    },
    'sell-price': {
      order: 3,
      name: 'Sell Price ($)',
      description:
        'Enter the price in dollars that this vehicle can/was sold for at the end of ownership.',
    },
    mpg: {
      order: 4,
      name: 'MPG',
      description:
        'Enter the average miles per gallon fuel economy of this vehicle throughout the ownership.',
    },
    insurance: {
      order: 5,
      name: 'Insurance ($)',
      description:
        'Enter the cost of insurance for this vehicle. This can be defined by time frame (per year/month).',
    },
    registration: {
      order: 6,
      name: 'Registration ($)',
      description:
        'Enter the cost of registration for this vehicle. This can be defined by time frame (per year/month).',
    },
    'oil-change': {
      order: 7,
      name: 'Oil Change ($)',
      description:
        'Enter the cost of a typical oil change for this vehicle. Then enter how many miles between each oil change.',
    },
    tires: {
      order: 8,
      name: 'Tires ($)',
      description:
        'Enter the cost to typically replace all tires for this vehicle. Then enter how many miles between each tire change.',
    },
  };

  constructor() {}

  ngOnInit(): void {}

  sortMethod = (a: KeyValue<string, any>, b: KeyValue<string, any>): number => {
    return a.value.order - b.value.order;
  };
}
