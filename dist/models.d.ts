import { Exception } from 'butterfly-web/dist/Kotlin';
import { BleResponseStatus } from 'butterfly-web/dist/bluetooth/BleServer';
export declare class BleProfileDescription {
    readonly services: Map<string, BleServiceDescription>;
    constructor(services: Map<string, BleServiceDescription>);
    hashCode(): number;
    equals(other: any): boolean;
    toString(): string;
    copy(services?: Map<string, BleServiceDescription>): BleProfileDescription;
}
export declare class BleServiceDescription {
    readonly debugName: string;
    readonly primary: boolean;
    readonly characteristics: Map<string, BleCharacteristicDescription>;
    constructor(debugName: string, primary: boolean, characteristics: Map<string, BleCharacteristicDescription>);
    hashCode(): number;
    equals(other: any): boolean;
    toString(): string;
    copy(debugName?: string, primary?: boolean, characteristics?: Map<string, BleCharacteristicDescription>): BleServiceDescription;
}
export declare class BleCharacteristicDescription {
    readonly debugName: string;
    readonly properties: BleCharacteristicProperties;
    constructor(debugName: string, properties: BleCharacteristicProperties);
    hashCode(): number;
    equals(other: any): boolean;
    toString(): string;
    copy(debugName?: string, properties?: BleCharacteristicProperties): BleCharacteristicDescription;
}
export declare class BleDeviceInfo {
    readonly id: string;
    readonly name: (string | null);
    constructor(id: string, name: (string | null));
    hashCode(): number;
    equals(other: any): boolean;
    toString(): string;
    copy(id?: string, name?: (string | null)): BleDeviceInfo;
}
export declare class BleScanResult {
    readonly info: BleDeviceInfo;
    readonly rssi: number;
    constructor(info: BleDeviceInfo, rssi: number);
    hashCode(): number;
    equals(other: any): boolean;
    toString(): string;
    copy(info?: BleDeviceInfo, rssi?: number): BleScanResult;
}
export declare class BleCharacteristicProperties {
    readonly broadcast: boolean;
    readonly read: boolean;
    readonly writeWithoutResponse: boolean;
    readonly write: boolean;
    readonly notify: boolean;
    readonly indicate: boolean;
    readonly authenticatedSignedWrites: boolean;
    readonly extendedProperties: boolean;
    readonly notifyEncryptionRequired: boolean;
    readonly indicateEncryptionRequired: boolean;
    readonly writeEncryptionRequired: boolean;
    constructor(broadcast?: boolean, read?: boolean, writeWithoutResponse?: boolean, write?: boolean, notify?: boolean, indicate?: boolean, authenticatedSignedWrites?: boolean, extendedProperties?: boolean, notifyEncryptionRequired?: boolean, indicateEncryptionRequired?: boolean, writeEncryptionRequired?: boolean);
    hashCode(): number;
    equals(other: any): boolean;
    toString(): string;
    copy(broadcast?: boolean, read?: boolean, writeWithoutResponse?: boolean, write?: boolean, notify?: boolean, indicate?: boolean, authenticatedSignedWrites?: boolean, extendedProperties?: boolean, notifyEncryptionRequired?: boolean, indicateEncryptionRequired?: boolean, writeEncryptionRequired?: boolean): BleCharacteristicProperties;
}
export declare class BleResponseException extends Exception {
    readonly value: BleResponseStatus;
    constructor(value: BleResponseStatus);
}
