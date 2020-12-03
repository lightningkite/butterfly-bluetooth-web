import { MutableObservableProperty } from 'butterfly-web/dist/observables/MutableObservableProperty';
import { Observable, SubscriptionLike } from 'rxjs';
import { BleCharacteristicProperties, BleDeviceInfo, BleProfileDescription } from './models';
import { AbstractDisposable } from 'butterfly-web/dist/rx/AbstractDisposable';
export interface BleServerDelegate extends SubscriptionLike {
    readonly profile: BleProfileDescription;
    onConnect(from: BleDeviceInfo): void;
    onDisconnect(from: BleDeviceInfo): void;
    onSubscribe(from: BleDeviceInfo, service: string, characteristic: string): Observable<Int8Array>;
    onRead(from: BleDeviceInfo, service: string, characteristic: string): Observable<Int8Array>;
    onWrite(from: BleDeviceInfo, service: string, characteristic: string, value: Int8Array): Observable<void>;
}
export declare namespace BleServerDelegate {
    class PerCharacteristic extends AbstractDisposable implements BleServerDelegate {
        static implementsInterfaceComLightningkiteButterflyBluetoothBleServerDelegate: boolean;
        static implementsInterfaceIoReactivexDisposablesDisposable: boolean;
        readonly services: Map<string, PerCharacteristic.Service>;
        constructor(services: Map<string, PerCharacteristic.Service>);
        static constructorArrayPair(...pairs: [string, PerCharacteristic.Service][]): PerCharacteristic;
        readonly profile: BleProfileDescription;
        onConnect(from: BleDeviceInfo): void;
        onDisconnect(from: BleDeviceInfo): void;
        onSubscribe(from: BleDeviceInfo, service: string, characteristic: string): Observable<Int8Array>;
        onRead(from: BleDeviceInfo, service: string, characteristic: string): Observable<Int8Array>;
        onWrite(from: BleDeviceInfo, service: string, characteristic: string, value: Int8Array): Observable<void>;
        onDispose(): void;
    }
    namespace PerCharacteristic {
        class Service {
            readonly debugName: string;
            readonly primary: boolean;
            readonly delegates: Map<string, Delegate>;
            constructor(debugName: string, primary: boolean, delegates: Map<string, Delegate>);
            static constructorStringBooleanArrayPair(debugName: string, primary: boolean, ...pairs: [string, Delegate][]): Service;
        }
    }
    namespace PerCharacteristic {
        interface Delegate extends SubscriptionLike {
            readonly debugName: string;
            readonly properties: BleCharacteristicProperties;
            onConnect(from: BleDeviceInfo): void;
            onDisconnect(from: BleDeviceInfo): void;
            onSubscribe(from: BleDeviceInfo): Observable<Int8Array>;
            onRead(from: BleDeviceInfo): Observable<Int8Array>;
            onWrite(from: BleDeviceInfo, value: Int8Array): Observable<void>;
        }
    }
    namespace PerCharacteristic {
        class FromProperty extends AbstractDisposable implements Delegate {
            static implementsInterfaceComLightningkiteButterflyBluetoothBleServerDelegatePerCharacteristicDelegate: boolean;
            static implementsInterfaceIoReactivexDisposablesDisposable: boolean;
            readonly debugName: string;
            readonly property: MutableObservableProperty<Int8Array>;
            readonly properties: BleCharacteristicProperties;
            constructor(debugName: string, property: MutableObservableProperty<Int8Array>, properties?: BleCharacteristicProperties);
            onConnect(from: BleDeviceInfo): void;
            onDisconnect(from: BleDeviceInfo): void;
            onSubscribe(from: BleDeviceInfo): Observable<Int8Array>;
            onRead(from: BleDeviceInfo): Observable<Int8Array>;
            onWrite(from: BleDeviceInfo, value: Int8Array): Observable<void>;
            onDispose(): void;
        }
    }
}
