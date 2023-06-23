### Google Analytics 4 - [Measurement Protocol API](https://developers.google.com/analytics/devguides/collection/protocol/ga4?hl=en)

- Supports event tracking for GA4 in [Electron](http://electron.atom.io/) built apps.
- **Currently, it supports the event sending function.**  

### Features
- Event

### Github Page - Docs
https://github.com/hajeonghun/electron-google-analytics4

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
  import Analytics from 'electron-google-analytics4';
  const analytics = new Analytics('G-XXXXXX', 'xxxxx-xxxxx');
  ```
  **Usage**  
  To use the Analytics module, create a new instance of the Analytics class by providing the required parameters: `trackingID` and `secretKey`. ([secretKey Issuance Guide](https://www.monsterinsights.com/docs/how-to-create-your-measurement-protocol-api-secret-in-ga4/))  
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

    ```javascript
    analytics.set('user', null);
    ```

* Set Multiple parameter (custom params)

  `Analytics#setParams(obj)`
    ```javascript
    const params = {name: 'hun', age: 28};
    analytics.setParams(params);
    ```
  
* Initialization parameter (custom params)

    ```javascript
    analytics.setParams(); // customParams: {}
    ```

* Set User Properties

    ```javascript
    analytics.setUserProperties({userId: 'ha', page_path: location.href});
    ```
  
* Remove User Properties

    ```javascript
    analytics.setUserProperties();
    ```

* Send Event

  `Analytics#event(eventName)` 
  ```javascript
  analytics.event('page_view');
  // Return Promise
  ```

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
