import { Location } from './../../models/location';
import { Component, OnInit } from '@angular/core';
import { GpsDataService } from '../../services/gps-live/gps-data.service';

@Component({
  selector: 'app-gps-live',
  templateUrl: './gps-live.component.html',
  styleUrls: ['./gps-live.component.scss']
})
export class GpsLiveComponent implements OnInit {

  lat = 14.0836991;
  lng = -87.1765747;

  locations: Location[] = [];

  constructor(public gpsService: GpsDataService) { }

  ngOnInit() {
    this.gpsService.getLocations().subscribe(data => {
      this.locations = data;
    });
  }

}
