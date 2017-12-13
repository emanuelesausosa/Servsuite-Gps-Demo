import { Location } from './../../models/location';
import { Injectable } from '@angular/core';
import 'rxjs/Observable';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GpsDataService {

  locationCollection: AngularFirestoreCollection<Location>;
  locations: Observable<Location[]>;
  locationsDoc: AngularFirestoreDocument<Location>;

  constructor(public afs: AngularFirestore) {
    this.locationCollection = this.afs.collection('LocationDevice');
    this.locations = this.locationCollection.snapshotChanges().map(
      changes => {
        return changes.map(
          a => {
            const data = a.payload.doc.data() as Location;
            data.Id = a.payload.doc.id;
            return data;
          }
        );
      }
    );
  }

  getLocations() {
    return this.locations;
  }

}
