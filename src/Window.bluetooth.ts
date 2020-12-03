
import {BleServerDelegate} from "./BleServerDelegate";
import {RxBleClient} from "./RxBleClient";
import {BleServer} from "./BleServer";
import {Observable, of} from "rxjs";

//! Declares com.lightningkite.butterfly.bluetooth.ble
export function xActivityAccessGetBle(window: Window): Observable<RxBleClient> {
    return of(new RxBleClient())
}

//! Declares com.lightningkite.butterfly.bluetooth.bleServer
export function xActivityAccessBleServer(
    window: Window,
    delegate: BleServerDelegate,
    advertisingIntensity: number = 0.5
): BleServer {
    return new BleServer()
}

// val ActivityAccess.ble: Single<RxBleClient> get(){
//
//     fun ActivityAccess.bleServer(
//         delegate: BleServerDelegate,
//         advertisingIntensity: Float = .5f
// ): BleServer {