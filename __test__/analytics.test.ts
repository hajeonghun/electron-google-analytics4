import {describe, expect, test} from '@jest/globals';
import sum from '../src/index';
import axios from 'axios';
import Analytics from "../src/index";

describe('sum module', () => {
    test('adds 1 + 2 to equal 3', async () => {
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
