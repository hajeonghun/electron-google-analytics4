import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
class Analytics4 {
    trackingID;
    secretKey;
    clientID;
    sessionID;
    customParams = {};
    userProperties = null;
    baseURL = 'https://google-analytics.com/mp';
    collectURL = '/collect';
    constructor(trackingID, secretKey, clientID = uuidv4(), sessionID = uuidv4()) {
        this.trackingID = trackingID;
        this.secretKey = secretKey;
        this.clientID = clientID;
        this.sessionID = sessionID;
    }
    set(key, value) {
        if (value !== null) {
            this.customParams[key] = value;
        }
        else {
            delete this.customParams[key];
        }
        return this;
    }
    setParams(params) {
        if (typeof params === 'object' && Object.keys(params).length > 0) {
            Object.assign(this.customParams, params);
        }
        else {
            this.customParams = {};
        }
        return this;
    }
    setUserProperties(upValue) {
        if (typeof upValue === 'object' && Object.keys(upValue).length > 0) {
            this.userProperties = upValue;
        }
        else {
            this.userProperties = null;
        }
        return this;
    }
    event(eventName) {
        const payload = {
            client_id: this.clientID,
            events: [
                {
                    name: eventName,
                    params: {
                        session_id: this.sessionID,
                        ...this.customParams,
                    },
                },
            ],
        };
        if (this.userProperties) {
            Object.assign(payload, { user_properties: this.userProperties });
        }
        return axios
            .post(`${this.baseURL}${this.collectURL}?measurement_id=${this.trackingID}&api_secret=${this.secretKey}`, payload);
    }
    ;
}
export default Analytics4;
