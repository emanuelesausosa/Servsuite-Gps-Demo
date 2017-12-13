import { VehicleMaintenance } from './vehicle-maintenance';
export interface Vehicle {
    Id: string;
    Name: string;
    Mileage: number;
    MileageGps: number;
    Hours: number;
    HoursGps: number;
    LastUpdate: Date;
    Notes: string;
    Maintenances: VehicleMaintenance[];
}
