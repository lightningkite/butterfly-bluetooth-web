"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//! Declares com.lightningkite.butterfly.bluetooth.BleServer
class BleServer {
    constructor() {
        this.advertisingField = true;
        this.closed = false;
    }
    get advertising() { return this.advertisingField; }
    set advertising(value) {
        this.advertisingField = value;
    }
    unsubscribe() {
        this.closed = true;
    }
}
exports.BleServer = BleServer;
//# sourceMappingURL=BleServer.js.map