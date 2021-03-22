"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuildConfig = void 0;
//! Declares com.tresitgroup.android.tresit.BuildConfig
class BuildConfig {
    static get DEBUG() {
        var _a;
        return (_a = window.isDebugMode) !== null && _a !== void 0 ? _a : false;
    }
}
exports.BuildConfig = BuildConfig;
BuildConfig.INSTANCE = BuildConfig;
BuildConfig.VERSION_NAME = "1.0.5";
BuildConfig.VERSION_CODE = 5;
//# sourceMappingURL=BuildConfig.js.map