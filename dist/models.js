"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BleResponseException = exports.BleCharacteristicProperties = exports.BleScanResult = exports.BleDeviceInfo = exports.BleCharacteristicDescription = exports.BleServiceDescription = exports.BleProfileDescription = void 0;
// Generated by Khrysalis TypeScript converter - this file will be overwritten.
// File: models.kt
// Package: com.lightningkite.butterfly.bluetooth
const Kotlin_1 = require("butterfly-web/dist/Kotlin");
//! Declares com.lightningkite.butterfly.bluetooth.BleProfileDescription
class BleProfileDescription {
    constructor(services) {
        this.services = services;
    }
    hashCode() {
        let hash = 17;
        hash = 31 * hash + Kotlin_1.hashAnything(this.services);
        return hash;
    }
    equals(other) { return other instanceof BleProfileDescription && Kotlin_1.safeEq(this.services, other.services); }
    toString() { return `BleProfileDescription(services = ${this.services})`; }
    copy(services = this.services) { return new BleProfileDescription(services); }
}
exports.BleProfileDescription = BleProfileDescription;
//! Declares com.lightningkite.butterfly.bluetooth.BleServiceDescription
class BleServiceDescription {
    constructor(debugName, primary, characteristics) {
        this.debugName = debugName;
        this.primary = primary;
        this.characteristics = characteristics;
    }
    hashCode() {
        let hash = 17;
        hash = 31 * hash + Kotlin_1.hashAnything(this.debugName);
        hash = 31 * hash + Kotlin_1.hashAnything(this.primary);
        hash = 31 * hash + Kotlin_1.hashAnything(this.characteristics);
        return hash;
    }
    equals(other) { return other instanceof BleServiceDescription && Kotlin_1.safeEq(this.debugName, other.debugName) && Kotlin_1.safeEq(this.primary, other.primary) && Kotlin_1.safeEq(this.characteristics, other.characteristics); }
    toString() { return `BleServiceDescription(debugName = ${this.debugName}, primary = ${this.primary}, characteristics = ${this.characteristics})`; }
    copy(debugName = this.debugName, primary = this.primary, characteristics = this.characteristics) { return new BleServiceDescription(debugName, primary, characteristics); }
}
exports.BleServiceDescription = BleServiceDescription;
//! Declares com.lightningkite.butterfly.bluetooth.BleCharacteristicDescription
class BleCharacteristicDescription {
    constructor(debugName, properties) {
        this.debugName = debugName;
        this.properties = properties;
    }
    hashCode() {
        let hash = 17;
        hash = 31 * hash + Kotlin_1.hashAnything(this.debugName);
        hash = 31 * hash + Kotlin_1.hashAnything(this.properties);
        return hash;
    }
    equals(other) { return other instanceof BleCharacteristicDescription && Kotlin_1.safeEq(this.debugName, other.debugName) && Kotlin_1.safeEq(this.properties, other.properties); }
    toString() { return `BleCharacteristicDescription(debugName = ${this.debugName}, properties = ${this.properties})`; }
    copy(debugName = this.debugName, properties = this.properties) { return new BleCharacteristicDescription(debugName, properties); }
}
exports.BleCharacteristicDescription = BleCharacteristicDescription;
//! Declares com.lightningkite.butterfly.bluetooth.BleDeviceInfo
class BleDeviceInfo {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    hashCode() {
        let hash = 17;
        hash = 31 * hash + Kotlin_1.hashAnything(this.id);
        hash = 31 * hash + Kotlin_1.hashAnything(this.name);
        return hash;
    }
    equals(other) { return other instanceof BleDeviceInfo && Kotlin_1.safeEq(this.id, other.id) && Kotlin_1.safeEq(this.name, other.name); }
    toString() { return `BleDeviceInfo(id = ${this.id}, name = ${this.name})`; }
    copy(id = this.id, name = this.name) { return new BleDeviceInfo(id, name); }
}
exports.BleDeviceInfo = BleDeviceInfo;
//! Declares com.lightningkite.butterfly.bluetooth.BleScanResult
class BleScanResult {
    constructor(info, rssi) {
        this.info = info;
        this.rssi = rssi;
    }
    hashCode() {
        let hash = 17;
        hash = 31 * hash + Kotlin_1.hashAnything(this.info);
        hash = 31 * hash + Kotlin_1.hashAnything(this.rssi);
        return hash;
    }
    equals(other) { return other instanceof BleScanResult && Kotlin_1.safeEq(this.info, other.info) && Kotlin_1.safeEq(this.rssi, other.rssi); }
    toString() { return `BleScanResult(info = ${this.info}, rssi = ${this.rssi})`; }
    copy(info = this.info, rssi = this.rssi) { return new BleScanResult(info, rssi); }
}
exports.BleScanResult = BleScanResult;
//! Declares com.lightningkite.butterfly.bluetooth.BleCharacteristicProperties
class BleCharacteristicProperties {
    constructor(broadcast = false, read = false, writeWithoutResponse = false, write = false, notify = false, indicate = false, authenticatedSignedWrites = false, extendedProperties = false, notifyEncryptionRequired = false, indicateEncryptionRequired = false, writeEncryptionRequired = false) {
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
    hashCode() {
        let hash = 17;
        hash = 31 * hash + Kotlin_1.hashAnything(this.broadcast);
        hash = 31 * hash + Kotlin_1.hashAnything(this.read);
        hash = 31 * hash + Kotlin_1.hashAnything(this.writeWithoutResponse);
        hash = 31 * hash + Kotlin_1.hashAnything(this.write);
        hash = 31 * hash + Kotlin_1.hashAnything(this.notify);
        hash = 31 * hash + Kotlin_1.hashAnything(this.indicate);
        hash = 31 * hash + Kotlin_1.hashAnything(this.authenticatedSignedWrites);
        hash = 31 * hash + Kotlin_1.hashAnything(this.extendedProperties);
        hash = 31 * hash + Kotlin_1.hashAnything(this.notifyEncryptionRequired);
        hash = 31 * hash + Kotlin_1.hashAnything(this.indicateEncryptionRequired);
        hash = 31 * hash + Kotlin_1.hashAnything(this.writeEncryptionRequired);
        return hash;
    }
    equals(other) { return other instanceof BleCharacteristicProperties && Kotlin_1.safeEq(this.broadcast, other.broadcast) && Kotlin_1.safeEq(this.read, other.read) && Kotlin_1.safeEq(this.writeWithoutResponse, other.writeWithoutResponse) && Kotlin_1.safeEq(this.write, other.write) && Kotlin_1.safeEq(this.notify, other.notify) && Kotlin_1.safeEq(this.indicate, other.indicate) && Kotlin_1.safeEq(this.authenticatedSignedWrites, other.authenticatedSignedWrites) && Kotlin_1.safeEq(this.extendedProperties, other.extendedProperties) && Kotlin_1.safeEq(this.notifyEncryptionRequired, other.notifyEncryptionRequired) && Kotlin_1.safeEq(this.indicateEncryptionRequired, other.indicateEncryptionRequired) && Kotlin_1.safeEq(this.writeEncryptionRequired, other.writeEncryptionRequired); }
    toString() { return `BleCharacteristicProperties(broadcast = ${this.broadcast}, read = ${this.read}, writeWithoutResponse = ${this.writeWithoutResponse}, write = ${this.write}, notify = ${this.notify}, indicate = ${this.indicate}, authenticatedSignedWrites = ${this.authenticatedSignedWrites}, extendedProperties = ${this.extendedProperties}, notifyEncryptionRequired = ${this.notifyEncryptionRequired}, indicateEncryptionRequired = ${this.indicateEncryptionRequired}, writeEncryptionRequired = ${this.writeEncryptionRequired})`; }
    copy(broadcast = this.broadcast, read = this.read, writeWithoutResponse = this.writeWithoutResponse, write = this.write, notify = this.notify, indicate = this.indicate, authenticatedSignedWrites = this.authenticatedSignedWrites, extendedProperties = this.extendedProperties, notifyEncryptionRequired = this.notifyEncryptionRequired, indicateEncryptionRequired = this.indicateEncryptionRequired, writeEncryptionRequired = this.writeEncryptionRequired) { return new BleCharacteristicProperties(broadcast, read, writeWithoutResponse, write, notify, indicate, authenticatedSignedWrites, extendedProperties, notifyEncryptionRequired, indicateEncryptionRequired, writeEncryptionRequired); }
}
exports.BleCharacteristicProperties = BleCharacteristicProperties;
//! Declares com.lightningkite.butterfly.bluetooth.BleResponseException
class BleResponseException extends Kotlin_1.Exception {
    constructor(value) {
        super(value.name);
        this.value = value;
    }
}
exports.BleResponseException = BleResponseException;
//# sourceMappingURL=models.js.map