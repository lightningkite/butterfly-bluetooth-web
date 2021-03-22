"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScanCallbackType = exports.ScanRecord = exports.ScanResult = exports.RxBleDevice = exports.RxBleClient = void 0;
class RxBleClient {
    getBleDevice(macAddress) {
        throw Error("Not implemented yet");
    }
    getBondedDevices() {
        throw Error("Not implemented yet");
    }
    scanBleDevices(scanSettings, ...scanFilters) {
        throw Error("Not implemented yet");
    }
}
exports.RxBleClient = RxBleClient;
//! Declares com.polidea.rxandroidble2.RxBleDevice
class RxBleDevice {
}
exports.RxBleDevice = RxBleDevice;
//! Declares com.polidea.rxandroidble2.scan.ScanResult
class ScanResult {
}
exports.ScanResult = ScanResult;
//! Declares com.polidea.rxandroidble2.scan.ScanRecord
class ScanRecord {
    getManufacturerSpecificData(manufacturerId) {
        throw Error("Not implemented yet");
    }
    getServiceData(serviceDataUuid) {
        throw Error("Not implemented yet");
    }
}
exports.ScanRecord = ScanRecord;
//! Declares com.polidea.rxandroidble2.scan.ScanCallbackType
var ScanCallbackType;
(function (ScanCallbackType) {
    ScanCallbackType[ScanCallbackType["CALLBACK_TYPE_ALL_MATCHES"] = 0] = "CALLBACK_TYPE_ALL_MATCHES";
    ScanCallbackType[ScanCallbackType["CALLBACK_TYPE_FIRST_MATCH"] = 1] = "CALLBACK_TYPE_FIRST_MATCH";
    ScanCallbackType[ScanCallbackType["CALLBACK_TYPE_MATCH_LOST"] = 2] = "CALLBACK_TYPE_MATCH_LOST";
    ScanCallbackType[ScanCallbackType["CALLBACK_TYPE_BATCH"] = 3] = "CALLBACK_TYPE_BATCH";
    ScanCallbackType[ScanCallbackType["CALLBACK_TYPE_UNSPECIFIED"] = 4] = "CALLBACK_TYPE_UNSPECIFIED";
    ScanCallbackType[ScanCallbackType["CALLBACK_TYPE_UNKNOWN"] = 5] = "CALLBACK_TYPE_UNKNOWN";
})(ScanCallbackType = exports.ScanCallbackType || (exports.ScanCallbackType = {}));
//# sourceMappingURL=RxBleClient.js.map