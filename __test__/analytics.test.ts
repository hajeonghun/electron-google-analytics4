import {describe, expect, test, beforeEach, afterEach, beforeAll ,afterAll} from '@jest/globals';
import Analytics from "../src/index";

const trackingID = 'G-RANDOM';
const secretKey = '000';

describe('Analytics', () => {
    test('should send a pageview request', async () => {
        const analytics = new Analytics(trackingID,secretKey);
        const response = await analytics.event('page_view');

        expect(response.status).toBe(204)
    });
    test('set function', async () => {
        const analytics = new Analytics(trackingID,secretKey);

        analytics.set('test1', 1);
        analytics.set('test2', 2);

        const response = await analytics.event('page_view');
        const configData = JSON.parse(response?.config?.data);

        expect(configData.events[0].params).toHaveProperty('test1');
        expect(configData.events[0].params).toHaveProperty('test2');
    });
    test('setParams function', async () => {
        const analytics = new Analytics(trackingID,secretKey);
        const customParams = {
            test3: 3,
            test4: 4,
        };

        analytics.set('test1', 1);
        analytics.set('test2', 2);
        analytics.setParams(customParams);

        const response = await analytics.event('page_view');
        const configData = JSON.parse(response?.config?.data);

        expect(configData.events[0].params).toHaveProperty('test1');
        expect(configData.events[0].params).toHaveProperty('test2');
        expect(configData.events[0].params).toHaveProperty('test3');
        expect(configData.events[0].params).toHaveProperty('test4');
    });

    test('method chaining', async () => {
        const analytics = new Analytics(trackingID,secretKey);

        const response = await analytics.set('test1', 1).set('test2', 2).event('page_view');
        const configData = JSON.parse(response?.config?.data);

        expect(configData.events[0].params).toHaveProperty('test1');
        expect(configData.events[0].params).toHaveProperty('test2');
    });
});
