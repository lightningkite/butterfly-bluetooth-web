import { BleServerDelegate } from "./BleServerDelegate";
import { RxBleClient } from "./RxBleClient";
import { BleServer } from "./BleServer";
import { Observable } from "rxjs";
export declare function xActivityAccessGetBle(window: Window): Observable<RxBleClient>;
export declare function xActivityAccessBleServer(window: Window, delegate: BleServerDelegate, advertisingIntensity?: number): BleServer;
