import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.css'],
})
export class AddVehicleComponent implements OnInit {
  @Output() addVehicleEvent = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  addVehicle(): void {
    this.addVehicleEvent.emit();
  }
}
