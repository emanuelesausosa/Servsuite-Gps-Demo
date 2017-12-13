import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HomeComponent } from './components/home/home.component';
import { AgmCoreModule } from '@agm/core';
import { GpsLiveComponent } from './components/gps-live/gps-live.component';
import { ReportsComponent } from './components/reports/reports.component';
import { FleetComponent } from './components/fleet/fleet.component';
import { DriverBehaviorComponent } from './components/driver-behavior/driver-behavior.component';
import { GpsDataService } from './services/gps-live/gps-data.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GpsLiveComponent,
    ReportsComponent,
    FleetComponent,
    DriverBehaviorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule,
    AngularFirestoreModule,
    BrowserAnimationsModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebase, 'servsuite-gps'),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAc5MqPT3OeyW2qETrN073Ifh60btjJkdo'
    })
  ],
  providers: [GpsDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
