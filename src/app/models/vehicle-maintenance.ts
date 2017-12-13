import { Vehicle } from './vehicle';

export interface VehicleMaintenance {
    Id: string;
    Description: string;
    DateDue: Date;
    DateComplete: Date;
    MileageDue: number;
    HoursDue: number;
    Cost: number;
    VehicleId: string;
    Vehicle: Vehicle;
}
