import { Vehicle } from './../../models/vehicle';
import { VehicleMaintenance } from './../../models/vehicle-maintenance';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material';

@Component({
  selector: 'app-fleet',
  templateUrl: './fleet.component.html',
  styleUrls: ['./fleet.component.scss']
})
export class FleetComponent implements OnInit {

  panelOpenState = true;
  Vehicles: Vehicle[];

  displayedColumns = ['description', 'datedue', 'datecompleted', 'mileagedue', 'hoursdue', 'cost'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor() { }

  ngOnInit() {
    this.Vehicles = [{
      Id: 'XXX100',
      Name: 'Sprayer 1',
      Mileage:  25000,
      MileageGps: 655,
      Hours: 0,
      HoursGps: 1024,
      LastUpdate: new Date(),
      Notes: '',
      Maintenances: [{
        Id: 'MWA1000',
        Description: 'Filter Change',
        DateDue: new Date(),
        DateComplete: new Date,
        MileageDue: 20000,
        HoursDue: 5000,
        Cost: 15,
        VehicleId: 'XXX100',
        Vehicle: null
      }]
    },
    {
      Id: 'XXX101',
      Name: 'Sprayer 2',
      Mileage:  27000,
      MileageGps: 555,
      Hours: 1,
      HoursGps: 5024,
      LastUpdate: new Date(),
      Notes: '',
      Maintenances: [{
        Id: 'MWA1000',
        Description: 'Filter Change',
        DateDue: new Date(),
        DateComplete: new Date,
        MileageDue: 20000,
        HoursDue: 5000,
        Cost: 15,
        VehicleId: 'XXX100',
        Vehicle: null
      }]
    }, {
      Id: 'XXX102',
      Name: 'Truck 2',
      Mileage:  27000,
      MileageGps: 555,
      Hours: 1,
      HoursGps: 5024,
      LastUpdate: new Date(),
      Notes: '',
      Maintenances: [{
        Id: 'MWA1000',
        Description: 'Filter Change',
        DateDue: new Date(),
        DateComplete: new Date,
        MileageDue: 20000,
        HoursDue: 5000,
        Cost: 15,
        VehicleId: 'XXX100',
        Vehicle: null
      }]
    }];
  }
}
