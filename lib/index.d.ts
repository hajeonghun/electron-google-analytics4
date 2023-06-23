declare class Analytics4 {
    private trackingID;
    private secretKey;
    private clientID;
    private sessionID;
    private customParams;
    private userProperties;
    private baseURL;
    private collectURL;
    constructor(trackingID: string, secretKey: string, clientID?: string, sessionID?: string);
    set(key: string, value: any): void;
    setParams(params?: Record<string, unknown>): void;
    setUserProperties(upValue?: Record<string, unknown>): void;
    event(eventName: string): Promise<any>;
}
export default Analytics4;
