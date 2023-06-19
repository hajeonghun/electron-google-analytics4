import {describe, expect, test} from '@jest/globals';
import Analytics from "../src/index";

describe('module', () => {
    test('analytics', async () => {
        const analytics = new Analytics('G-MFB9FKCXVY','Rx4CgrGJRP-t936bqifyNw','1080');
        analytics.set('serviceCode','jung')
        analytics.set('app_name','kakaka')
        analytics.setUserProperties({
            COLLECT_CNO: {value: '111'},
            COLLECT_COMPANY_NAME: {value: 'zzz'},
            COLLECT_SERVICE: {value: 'erwrwer'},
            COLLECT_USER_ID: {value: 'chmp'},
            COLLECT_SITE_URL: {value: '#/main'},
        })
        console.log('result: ',analytics.event('page_view'))
    });
});
