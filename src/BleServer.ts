import {SubscriptionLike} from "rxjs";

//! Declares com.lightningkite.butterfly.bluetooth.BleServer
export class BleServer implements SubscriptionLike {
    private advertisingField: boolean = true
    get advertising(): boolean { return this.advertisingField }
    set advertising(value: boolean) {
        this.advertisingField = value
    }

    closed: boolean = false;

    unsubscribe(): void {
        this.closed = true
    }
}