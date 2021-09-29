import { DeviceStatus } from "./device-status-enum";

export class PeripheralDevice{
    UID: number;
    vendor: string;
    date: Date |string;
    status: DeviceStatus;
}