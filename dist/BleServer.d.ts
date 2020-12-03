import { SubscriptionLike } from "rxjs";
export declare class BleServer implements SubscriptionLike {
    private advertisingField;
    get advertising(): boolean;
    set advertising(value: boolean);
    closed: boolean;
    unsubscribe(): void;
}
