// Generated by Khrysalis TypeScript converter - this file will be overwritten.
// File: models.kt
// Package: com.lightningkite.butterfly.bluetooth
import { Exception, hashAnything, safeEq } from 'butterfly-web/dist/Kotlin'
import { BleResponseStatus } from 'butterfly-web/dist/bluetooth/BleServer'

//! Declares com.lightningkite.butterfly.bluetooth.BleProfileDescription
export class BleProfileDescription {
    public readonly services: Map<string, BleServiceDescription>;
    public constructor(services: Map<string, BleServiceDescription>) {
        this.services = services;
    }
    public hashCode(): number {
        let hash = 17;
        hash = 31 * hash + hashAnything(this.services);
        return hash;
    }
    public equals(other: any): boolean { return other instanceof BleProfileDescription && safeEq(this.services, other.services) }
    public toString(): string { return `BleProfileDescription(services = ${this.services})` }
    public copy(services: Map<string, BleServiceDescription> = this.services): BleProfileDescription { return new BleProfileDescription(services); }
}
//! Declares com.lightningkite.butterfly.bluetooth.BleServiceDescription
export class BleServiceDescription {
    public readonly debugName: string;
    public readonly primary: boolean;
    public readonly characteristics: Map<string, BleCharacteristicDescription>;
    public constructor(debugName: string, primary: boolean, characteristics: Map<string, BleCharacteristicDescription>) {
        this.debugName = debugName;
        this.primary = primary;
        this.characteristics = characteristics;
    }
    public hashCode(): number {
        let hash = 17;
        hash = 31 * hash + hashAnything(this.debugName);
        hash = 31 * hash + hashAnything(this.primary);
        hash = 31 * hash + hashAnything(this.characteristics);
        return hash;
    }
    public equals(other: any): boolean { return other instanceof BleServiceDescription && safeEq(this.debugName, other.debugName) && safeEq(this.primary, other.primary) && safeEq(this.characteristics, other.characteristics) }
    public toString(): string { return `BleServiceDescription(debugName = ${this.debugName}, primary = ${this.primary}, characteristics = ${this.characteristics})` }
    public copy(debugName: string = this.debugName, primary: boolean = this.primary, characteristics: Map<string, BleCharacteristicDescription> = this.characteristics): BleServiceDescription { return new BleServiceDescription(debugName, primary, characteristics); }
}
//! Declares com.lightningkite.butterfly.bluetooth.BleCharacteristicDescription
export class BleCharacteristicDescription {
    public readonly debugName: string;
    public readonly properties: BleCharacteristicProperties;
    public constructor(debugName: string, properties: BleCharacteristicProperties) {
        this.debugName = debugName;
        this.properties = properties;
    }
    public hashCode(): number {
        let hash = 17;
        hash = 31 * hash + hashAnything(this.debugName);
        hash = 31 * hash + hashAnything(this.properties);
        return hash;
    }
    public equals(other: any): boolean { return other instanceof BleCharacteristicDescription && safeEq(this.debugName, other.debugName) && safeEq(this.properties, other.properties) }
    public toString(): string { return `BleCharacteristicDescription(debugName = ${this.debugName}, properties = ${this.properties})` }
    public copy(debugName: string = this.debugName, properties: BleCharacteristicProperties = this.properties): BleCharacteristicDescription { return new BleCharacteristicDescription(debugName, properties); }
}

//! Declares com.lightningkite.butterfly.bluetooth.BleDeviceInfo
export class BleDeviceInfo {
    public readonly id: string;
    public readonly name: (string | null);
    public constructor(id: string, name: (string | null)) {
        this.id = id;
        this.name = name;
    }
    public hashCode(): number {
        let hash = 17;
        hash = 31 * hash + hashAnything(this.id);
        hash = 31 * hash + hashAnything(this.name);
        return hash;
    }
    public equals(other: any): boolean { return other instanceof BleDeviceInfo && safeEq(this.id, other.id) && safeEq(this.name, other.name) }
    public toString(): string { return `BleDeviceInfo(id = ${this.id}, name = ${this.name})` }
    public copy(id: string = this.id, name: (string | null) = this.name): BleDeviceInfo { return new BleDeviceInfo(id, name); }
}

//! Declares com.lightningkite.butterfly.bluetooth.BleScanResult
export class BleScanResult {
    public readonly info: BleDeviceInfo;
    public readonly rssi: number;
    public constructor(info: BleDeviceInfo, rssi: number) {
        this.info = info;
        this.rssi = rssi;
    }
    public hashCode(): number {
        let hash = 17;
        hash = 31 * hash + hashAnything(this.info);
        hash = 31 * hash + hashAnything(this.rssi);
        return hash;
    }
    public equals(other: any): boolean { return other instanceof BleScanResult && safeEq(this.info, other.info) && safeEq(this.rssi, other.rssi) }
    public toString(): string { return `BleScanResult(info = ${this.info}, rssi = ${this.rssi})` }
    public copy(info: BleDeviceInfo = this.info, rssi: number = this.rssi): BleScanResult { return new BleScanResult(info, rssi); }
}

//! Declares com.lightningkite.butterfly.bluetooth.BleCharacteristicProperties
export class BleCharacteristicProperties {
    public readonly broadcast: boolean;
    public readonly read: boolean;
    public readonly writeWithoutResponse: boolean;
    public readonly write: boolean;
    public readonly notify: boolean;
    public readonly indicate: boolean;
    public readonly authenticatedSignedWrites: boolean;
    public readonly extendedProperties: boolean;
    public readonly notifyEncryptionRequired: boolean;
    public readonly indicateEncryptionRequired: boolean;
    public readonly writeEncryptionRequired: boolean;
    public constructor(broadcast: boolean = false, read: boolean = false, writeWithoutResponse: boolean = false, write: boolean = false, notify: boolean = false, indicate: boolean = false, authenticatedSignedWrites: boolean = false, extendedProperties: boolean = false, notifyEncryptionRequired: boolean = false, indicateEncryptionRequired: boolean = false, writeEncryptionRequired: boolean = false) {
        this.broadcast = broadcast;
        this.read = read;
        this.writeWithoutResponse = writeWithoutResponse;
        this.write = write;
        this.notify = notify;
        this.indicate = indicate;
        this.authenticatedSignedWrites = authenticatedSignedWrites;
        this.extendedProperties = extendedProperties;
        this.notifyEncryptionRequired = notifyEncryptionRequired;
        this.indicateEncryptionRequired = indicateEncryptionRequired;
        this.writeEncryptionRequired = writeEncryptionRequired;
    }
    public hashCode(): number {
        let hash = 17;
        hash = 31 * hash + hashAnything(this.broadcast);
        hash = 31 * hash + hashAnything(this.read);
        hash = 31 * hash + hashAnything(this.writeWithoutResponse);
        hash = 31 * hash + hashAnything(this.write);
        hash = 31 * hash + hashAnything(this.notify);
        hash = 31 * hash + hashAnything(this.indicate);
        hash = 31 * hash + hashAnything(this.authenticatedSignedWrites);
        hash = 31 * hash + hashAnything(this.extendedProperties);
        hash = 31 * hash + hashAnything(this.notifyEncryptionRequired);
        hash = 31 * hash + hashAnything(this.indicateEncryptionRequired);
        hash = 31 * hash + hashAnything(this.writeEncryptionRequired);
        return hash;
    }
    public equals(other: any): boolean { return other instanceof BleCharacteristicProperties && safeEq(this.broadcast, other.broadcast) && safeEq(this.read, other.read) && safeEq(this.writeWithoutResponse, other.writeWithoutResponse) && safeEq(this.write, other.write) && safeEq(this.notify, other.notify) && safeEq(this.indicate, other.indicate) && safeEq(this.authenticatedSignedWrites, other.authenticatedSignedWrites) && safeEq(this.extendedProperties, other.extendedProperties) && safeEq(this.notifyEncryptionRequired, other.notifyEncryptionRequired) && safeEq(this.indicateEncryptionRequired, other.indicateEncryptionRequired) && safeEq(this.writeEncryptionRequired, other.writeEncryptionRequired) }
    public toString(): string { return `BleCharacteristicProperties(broadcast = ${this.broadcast}, read = ${this.read}, writeWithoutResponse = ${this.writeWithoutResponse}, write = ${this.write}, notify = ${this.notify}, indicate = ${this.indicate}, authenticatedSignedWrites = ${this.authenticatedSignedWrites}, extendedProperties = ${this.extendedProperties}, notifyEncryptionRequired = ${this.notifyEncryptionRequired}, indicateEncryptionRequired = ${this.indicateEncryptionRequired}, writeEncryptionRequired = ${this.writeEncryptionRequired})` }
    public copy(broadcast: boolean = this.broadcast, read: boolean = this.read, writeWithoutResponse: boolean = this.writeWithoutResponse, write: boolean = this.write, notify: boolean = this.notify, indicate: boolean = this.indicate, authenticatedSignedWrites: boolean = this.authenticatedSignedWrites, extendedProperties: boolean = this.extendedProperties, notifyEncryptionRequired: boolean = this.notifyEncryptionRequired, indicateEncryptionRequired: boolean = this.indicateEncryptionRequired, writeEncryptionRequired: boolean = this.writeEncryptionRequired): BleCharacteristicProperties { return new BleCharacteristicProperties(broadcast, read, writeWithoutResponse, write, notify, indicate, authenticatedSignedWrites, extendedProperties, notifyEncryptionRequired, indicateEncryptionRequired, writeEncryptionRequired); }
}

//! Declares com.lightningkite.butterfly.bluetooth.BleResponseException
export class BleResponseException extends Exception {
    public readonly value: BleResponseStatus;
    public constructor(value: BleResponseStatus) {
        super(value.name);
        this.value = value;
    }
}
