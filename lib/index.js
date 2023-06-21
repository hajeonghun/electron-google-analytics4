"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var uuid_1 = require("uuid");
var axios_1 = require("axios");
var node_machine_id_1 = require("node-machine-id");
var Analytics4 = /** @class */ (function () {
    function Analytics4(trackingID, secretKey, clientID, sessionID) {
        if (clientID === void 0) { clientID = (0, node_machine_id_1.machineIdSync)(); }
        if (sessionID === void 0) { sessionID = (0, uuid_1.v4)(); }
        this.customParams = {};
        this.userProperties = null;
        this.baseURL = 'https://google-analytics.com/mp';
        this.collectURL = '/collect';
        this.trackingID = trackingID;
        this.secretKey = secretKey;
        this.clientID = clientID;
        this.sessionID = sessionID;
    }
    Analytics4.prototype.set = function (key, value) {
        if (value !== null) {
            this.customParams[key] = value;
        }
        else {
            delete this.customParams[key];
        }
    };
    Analytics4.prototype.setUserProperties = function (upValue) {
        if (typeof upValue === 'object' && Object.keys(upValue).length > 0) {
            this.userProperties = upValue;
        }
        else {
            this.userProperties = null;
        }
    };
    Analytics4.prototype.event = function (eventName) {
        var payload = {
            client_id: this.clientID,
            events: [
                {
                    name: eventName,
                    params: __assign({ session_id: this.sessionID }, this.customParams),
                },
            ],
        };
        if (this.userProperties) {
            Object.assign(payload, { user_properties: this.userProperties });
        }
        return axios_1.default
            .post("".concat(this.baseURL).concat(this.collectURL, "?measurement_id=").concat(this.trackingID, "&api_secret=").concat(this.secretKey), payload);
    };
    ;
    return Analytics4;
}());
exports.default = Analytics4;
