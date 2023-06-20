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
});
