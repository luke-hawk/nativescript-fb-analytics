# Nativescript: Facebook Analytics
Adds *only* Facebook Analytics to your Nativescript app *not* the full Facebook SDK. 

This plugin is based on [nativescript-facebook](https://github.com/NativeScript/nativescript-facebook) but only includes the Facebook Core Library which is needed for analytics. This way it **reduces the bundle size by 86%** compared to nativescript-facebook which includes the full Facebook SDK. If you want to learn more you may read this [blog post](https://developers.facebook.com/blog/post/2017/09/26/android-sdk-optimization/).

## Installation
```
tns plugin add nativescript-fb-analytics
```

## Configuration
The following configuration is needed in order to get started with Facebook Analytics. In order to obtain a Facebook App-ID please refer to the official [documentation](https://developers.facebook.com/docs/apps/).

Initialize the plugin before calling `app.run`:
```js
/* your-project/app/app.ts */
import * as app from "tns-core-modules/application";
import * as fbAnalytics from 'nativescript-fb-analytics';

app.on(app.launchEvent, function (args) {
    fbAnalytics.initAnalytics();
});
```

Additional configs needed for **Android**:
```xml
<!--your-project/app/App_Resources/Android/src/main/res/values/strings.xml-->
<string name="facebook_app_id">YOUR_APP_ID</string>


<!--your-project/app/App_Resources/Android/src/main/res/AndroidManifest.xml-->
<application
	android:name="com.tns.NativeScriptApplication"
	android:allowBackup="true"
	android:icon="@drawable/icon"
	android:label="@string/app_name"
	android:theme="@style/AppTheme">
    
    <meta-data android:name="com.facebook.sdk.ApplicationId" android:value="@string/facebook_app_id"/>
	...
</application>
```

Additional configs needed for **iOS**:
```xml
<!--your-project/app/App_Resources/iOS/Info.plist-->
<key>CFBundleURLTypes</key>
<array>
  <dict>
    <key>CFBundleURLSchemes</key>
      <array>
        <string>fbYOUR_APP_ID</string>
      </array>
  </dict>
</array>
<key>FacebookAppID</key>
<string>YOUR_APP_ID</string>
<key>FacebookDisplayName</key>
<string>YOUR_APP_NAME</string>
```

## Usage

You can log events from anywhere you want by importing
```js
import * as fbAnalytics from 'nativescript-fb-analytics';
```

and calling
```js
fbAnalytics.logEvent('Lead');
```

You may also add parameters to your event logging:
```js
const value = 5;
const parameters = [{
    key: 'value',
    value: value.toString(),
}];

fbAnalytics.logEvent(FundsAdded, parameters);
```


