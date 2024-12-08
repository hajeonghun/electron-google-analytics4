### Google Analytics 4 - [Measurement Protocol API](https://developers.google.com/analytics/devguides/collection/protocol/ga4?hl=en)

- Supports event tracking for GA4 in [Electron](http://electron.atom.io/) built apps.
- **Currently, it supports the event sending function.**  

### NPM
[![npm version](https://badge.fury.io/js/electron-google-analytics4.svg)](https://www.npmjs.com/package/electron-google-analytics4)

### Github Page - Docs
https://github.com/hajeonghun/electron-google-analytics4

### Features
- Event

### Getting started
Installation
```
npm i electron-google-analytics4
or
yarn add electron-google-analytics4
```

* Init

  `Analytics(trackingID, secretKey, clientID?, sessionID?)`
  ```javascript
  import Analytics from 'electron-google-analytics4'; // esm
  // or
  const Analytics = require('electron-google-analytics4').default; // cjs
  
  const analytics = new Analytics('G-XXXXXX', 'xxxxx-xxxxx');
  ```
  **Usage**  
  To use the Analytics module, create a new instance of the Analytics class by providing the required parameters: `trackingID` and `secretKey`. ([SecretKey Issuance Guide](#secretkey-issuance-guide))  
  The `clientID` and `sessionID` parameters are optional and can be omitted if not needed.   
  `clientID default: ` machineId (node-machine-id)  
  `sessionID default: ` uuidv4 (uuid v4)  
<br/>

* Set Single parameter (custom params)

  `Analytics#set(key, value)`
    ```javascript
    analytics.set('user', 'jeonghun');
    ```

* Remove Single parameter (custom params)

  `Analytics#set(key, null)`
    ```javascript
    analytics.set('user', null);
    ```

* Set Multiple parameter (custom params)

  `Analytics#setParams(obj)`
    ```javascript
    const params = {name: 'hun', age: 28};
    analytics.setParams(params);
    ```
  
* Remove Multiple parameter (custom params)

  `Analytics#setParams()`
    ```javascript
    analytics.setParams(); // customParams: {}
    ```

* Set User Properties

  `Analytics#setUserProperties(obj)`
    ```javascript
    analytics.setUserProperties({userId: 'ha', page_path: location.href});
    ```
  
* Remove User Properties

  `Analytics#setUserProperties()`
    ```javascript
    analytics.setUserProperties();
    ```

* Send Event

  `Analytics#event(eventName)` 
  ```javascript
  analytics.event('page_view');
  // Return Promise
  ```

### Notes
`Method chaining is available.`
```typescript
analytics.set('name', 'jeonghun').set('age', 28);
// or
analytics.set('name', 'jeonghun').event('page_view');
```

### SecretKey Issuance Guide
#### Step 1. 
Go to [analytics.google.com](http://analytics.google.com/). click Admin, and then select Data Streams from the available options.  

![image](https://github.com/user-attachments/assets/1ee5b49f-ebb4-4a3d-a953-b8fcfed8834a)

#### Step 2.
Click on Data Streams and select your specific data stream.  

![image](https://github.com/user-attachments/assets/087dd6d0-300d-4097-86d2-c23efd097ebd)

#### Step 3.
Under the Events section, click on Measurement Protocol API Secrets.  

![image](https://github.com/user-attachments/assets/6adbc630-4698-4534-8699-bb9d458ca6cc)

#### Step 4.
Click the Create button to generate a new API secret and assign it a nickname.  

![image](https://github.com/user-attachments/assets/a828a5cc-b38f-4b72-8099-f44107d4d47e)

### Verification Steps
```
1. Log in to your GA4 account.
2. Navigate to the "Real-time" section from the left-hand menu.
3. Go to the "Overview" tab.
4. Verify if the real-time data is being displayed:
  - Check if the number of active users, page views, and events are updating in real-time.
  - If the data is not being displayed correctly, double-check your code and troubleshoot any issues.
```
# MIT
