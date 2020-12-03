"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RxBleClient_1 = require("./RxBleClient");
const BleServer_1 = require("./BleServer");
const rxjs_1 = require("rxjs");
//! Declares com.lightningkite.butterfly.bluetooth.ble
function xActivityAccessGetBle(window) {
    return rxjs_1.of(new RxBleClient_1.RxBleClient());
}
exports.xActivityAccessGetBle = xActivityAccessGetBle;
//! Declares com.lightningkite.butterfly.bluetooth.bleServer
function xActivityAccessBleServer(window, delegate, advertisingIntensity = 0.5) {
    return new BleServer_1.BleServer();
}
exports.xActivityAccessBleServer = xActivityAccessBleServer;
// val ActivityAccess.ble: Single<RxBleClient> get(){
//
//     fun ActivityAccess.bleServer(
//         delegate: BleServerDelegate,
//         advertisingIntensity: Float = .5f
// ): BleServer {
//# sourceMappingURL=Window.bluetooth.js.map