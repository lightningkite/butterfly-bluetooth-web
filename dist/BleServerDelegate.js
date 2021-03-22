"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BleServerDelegate = void 0;
const rxjs_1 = require("rxjs");
const ObservableProperty_ext_1 = require("butterfly-web/dist/observables/ObservableProperty.ext");
const models_1 = require("./models");
const AbstractDisposable_1 = require("butterfly-web/dist/rx/AbstractDisposable");
const lazyOp_1 = require("butterfly-web/dist/kotlin/lazyOp");
const Collections_1 = require("butterfly-web/dist/kotlin/Collections");
const BleServer_1 = require("butterfly-web/dist/bluetooth/BleServer");
var BleServerDelegate;
(function (BleServerDelegate) {
    //! Declares com.lightningkite.butterfly.bluetooth.BleServerDelegate.PerCharacteristic
    class PerCharacteristic extends AbstractDisposable_1.AbstractDisposable {
        constructor(services) {
            super();
            this.services = services;
            this.profile = new models_1.BleProfileDescription(Collections_1.xMapMapValues(this.services, (it) => new models_1.BleServiceDescription(it[1].debugName, it[1].primary, Collections_1.xMapMapValues(it[1].delegates, (it) => new models_1.BleCharacteristicDescription(it[1].debugName, it[1].properties)))));
        }
        static constructorArrayPair(...pairs) {
            let result = new PerCharacteristic(new Map(lazyOp_1.map(pairs, (it) => it)));
            return result;
        }
        onConnect(from) {
            for (const _x of Collections_1.iterFlatMap(this.services.entries(), (it) => it[1].delegates.entries())) {
                const it = _x;
                it[1].onConnect(from);
            }
            ;
        }
        onDisconnect(from) {
            for (const _x of Collections_1.iterFlatMap(this.services.entries(), (it) => it[1].delegates.entries())) {
                const it = _x;
                it[1].onDisconnect(from);
            }
            ;
        }
        onSubscribe(from, service, characteristic) {
            var _a, _b, _c;
            return (_c = ((_b = (_a = (() => {
                var _a, _b, _c, _d;
                const temp173 = ((_c = (_b = ((_a = this.services.get(service)) !== null && _a !== void 0 ? _a : null)) === null || _b === void 0 ? void 0 : _b.delegates) !== null && _c !== void 0 ? _c : null);
                if (temp173 === null) {
                    return null;
                }
                return ((_d = temp173.get(characteristic)) !== null && _d !== void 0 ? _d : null);
            })()) === null || _a === void 0 ? void 0 : _a.onSubscribe(from)) !== null && _b !== void 0 ? _b : null)) !== null && _c !== void 0 ? _c : rxjs_1.throwError(new models_1.BleResponseException(BleServer_1.BleResponseStatus.attributeNotFound));
        }
        onRead(from, service, characteristic) {
            var _a, _b, _c;
            return (_c = ((_b = (_a = (() => {
                var _a, _b, _c, _d;
                const temp175 = ((_c = (_b = ((_a = this.services.get(service)) !== null && _a !== void 0 ? _a : null)) === null || _b === void 0 ? void 0 : _b.delegates) !== null && _c !== void 0 ? _c : null);
                if (temp175 === null) {
                    return null;
                }
                return ((_d = temp175.get(characteristic)) !== null && _d !== void 0 ? _d : null);
            })()) === null || _a === void 0 ? void 0 : _a.onRead(from)) !== null && _b !== void 0 ? _b : null)) !== null && _c !== void 0 ? _c : rxjs_1.throwError(new models_1.BleResponseException(BleServer_1.BleResponseStatus.attributeNotFound));
        }
        onWrite(from, service, characteristic, value) {
            var _a, _b, _c;
            return (_c = ((_b = (_a = (() => {
                var _a, _b, _c, _d;
                const temp177 = ((_c = (_b = ((_a = this.services.get(service)) !== null && _a !== void 0 ? _a : null)) === null || _b === void 0 ? void 0 : _b.delegates) !== null && _c !== void 0 ? _c : null);
                if (temp177 === null) {
                    return null;
                }
                return ((_d = temp177.get(characteristic)) !== null && _d !== void 0 ? _d : null);
            })()) === null || _a === void 0 ? void 0 : _a.onWrite(from, value)) !== null && _b !== void 0 ? _b : null)) !== null && _c !== void 0 ? _c : rxjs_1.throwError(new models_1.BleResponseException(BleServer_1.BleResponseStatus.attributeNotFound));
        }
        onDispose() {
            for (const _x of Collections_1.iterFlatMap(this.services.entries(), (it) => it[1].delegates.entries())) {
                const it = _x;
                it[1].unsubscribe();
            }
            ;
        }
    }
    PerCharacteristic.implementsInterfaceComLightningkiteButterflyBluetoothBleServerDelegate = true;
    PerCharacteristic.implementsInterfaceIoReactivexDisposablesDisposable = true;
    BleServerDelegate.PerCharacteristic = PerCharacteristic;
    (function (PerCharacteristic) {
        //! Declares com.lightningkite.butterfly.bluetooth.BleServerDelegate.PerCharacteristic.Service
        class Service {
            constructor(debugName, primary, delegates) {
                this.debugName = debugName;
                this.primary = primary;
                this.delegates = delegates;
            }
            static constructorStringBooleanArrayPair(debugName, primary, ...pairs) {
                let result = new Service(debugName, primary, new Map(lazyOp_1.map(pairs, (it) => it)));
                return result;
            }
        }
        PerCharacteristic.Service = Service;
    })(PerCharacteristic = BleServerDelegate.PerCharacteristic || (BleServerDelegate.PerCharacteristic = {}));
    (function (PerCharacteristic) {
        //! Declares com.lightningkite.butterfly.bluetooth.BleServerDelegate.PerCharacteristic.FromProperty
        class FromProperty extends AbstractDisposable_1.AbstractDisposable {
            constructor(debugName, property, properties = new models_1.BleCharacteristicProperties(true, true, true, true, true, true, undefined, undefined, undefined, undefined, undefined)) {
                super();
                this.debugName = debugName;
                this.property = property;
                this.properties = properties;
            }
            onConnect(from) { }
            onDisconnect(from) { }
            onSubscribe(from) {
                return ObservableProperty_ext_1.xObservablePropertyObservableNNGet(this.property);
            }
            onRead(from) {
                return rxjs_1.of(this.property.value);
            }
            onWrite(from, value) {
                this.property.value = value;
                return rxjs_1.of(undefined);
            }
            onDispose() { }
        }
        FromProperty.implementsInterfaceComLightningkiteButterflyBluetoothBleServerDelegatePerCharacteristicDelegate = true;
        FromProperty.implementsInterfaceIoReactivexDisposablesDisposable = true;
        PerCharacteristic.FromProperty = FromProperty;
    })(PerCharacteristic = BleServerDelegate.PerCharacteristic || (BleServerDelegate.PerCharacteristic = {}));
})(BleServerDelegate = exports.BleServerDelegate || (exports.BleServerDelegate = {}));
//# sourceMappingURL=BleServerDelegate.js.map