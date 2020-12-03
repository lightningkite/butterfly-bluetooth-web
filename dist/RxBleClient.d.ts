import { Observable } from "rxjs";
export declare class RxBleClient {
    getBleDevice(macAddress: string): RxBleDevice;
    getBondedDevices(): Set<RxBleDevice>;
    scanBleDevices(scanSettings: void, ...scanFilters: Array<void>): Observable<ScanResult>;
}
export declare class RxBleDevice {
}
export declare class ScanResult {
    bleDevice: RxBleDevice;
    rssi: number;
    timestampNanos: number;
    callbackType: ScanCallbackType;
    scanRecord: ScanRecord;
}
export declare class ScanRecord {
    advertiseFlags: number;
    serviceUuids: Array<string>;
    manufacturerSpecificData: Record<number, Int8Array>;
    getManufacturerSpecificData(manufacturerId: number): Int8Array;
    getServiceData(serviceDataUuid: string): Int8Array;
    txPowerLevel: number;
    deviceName: string;
    bytes: Int8Array;
}
export declare enum ScanCallbackType {
    CALLBACK_TYPE_ALL_MATCHES = 0,
    CALLBACK_TYPE_FIRST_MATCH = 1,
    CALLBACK_TYPE_MATCH_LOST = 2,
    CALLBACK_TYPE_BATCH = 3,
    CALLBACK_TYPE_UNSPECIFIED = 4,
    CALLBACK_TYPE_UNKNOWN = 5
}
