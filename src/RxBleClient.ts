
//! Declares com.polidea.rxandroidble2.RxBleClient
import {Observable} from "rxjs";

export class RxBleClient {
    public getBleDevice(macAddress: string): RxBleDevice {
        throw Error("Not implemented yet")
    }
    public getBondedDevices(): Set<RxBleDevice> {
        throw Error("Not implemented yet")
    }
    public scanBleDevices(scanSettings: void, ... scanFilters: Array<void>): Observable<ScanResult> {
        throw Error("Not implemented yet")
    }
}


//! Declares com.polidea.rxandroidble2.RxBleDevice
export class RxBleDevice {

}

//! Declares com.polidea.rxandroidble2.scan.ScanResult
export class ScanResult {
    bleDevice: RxBleDevice
    rssi: number
    timestampNanos: number
    callbackType: ScanCallbackType
    scanRecord: ScanRecord
}

//! Declares com.polidea.rxandroidble2.scan.ScanRecord
export class ScanRecord {
    advertiseFlags: number
    serviceUuids: Array<string>
    manufacturerSpecificData: Record<number, Int8Array>
    getManufacturerSpecificData(manufacturerId: number): Int8Array {
        throw Error("Not implemented yet")
    }
    getServiceData(serviceDataUuid: string): Int8Array {
        throw Error("Not implemented yet")
    }
    txPowerLevel: number
    deviceName: string
    bytes: Int8Array
}

//! Declares com.polidea.rxandroidble2.scan.ScanCallbackType
export enum ScanCallbackType {
    CALLBACK_TYPE_ALL_MATCHES,
    CALLBACK_TYPE_FIRST_MATCH,
    CALLBACK_TYPE_MATCH_LOST,
    CALLBACK_TYPE_BATCH,
    CALLBACK_TYPE_UNSPECIFIED,
    CALLBACK_TYPE_UNKNOWN
}
