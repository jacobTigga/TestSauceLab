## Technologies/Tools Used

- **IDE**: Visual Studio Code (VS Code)
- **Mobile Automation**: Appium
- **Package Manager**: npm (Node Package Manager)
- **Build Automation**: WebdriverIO (wdio)
- **Programming Language**: JavaScript
- **BDD Framework**: Cucumber
- **DSL**: Gherkin
- **Reporting**: Allure Reports
- **Version Control**: GitHub
- **Emulators & Simulators**:
  - [Android Studio Emulator](https://developer.android.com/studio/run/emulator)
  - [Xcode Simulator](https://developer.apple.com/documentation/xcode/installing-additional-simulator-runtimes)

## Step 1: Clone this Git Repository

Clone this Git repository to your local machine using the following command:

```bash
git clone <repository-url>
```

Replace `<repository-url>` with the URL of this Git repository.

## Step 2: Open cloned repository in VS Code

Navigate to the cloned repository directory and open it in Visual Studio Code (VS Code) using the following command:

```bash
code .
```

This command opens VS Code with the current directory loaded.

## Step 3: Installation

To install the necessary packages, run the following command:

```bash
npm install
```

## Step 4: Set Up Emulators/Simulators

Please ensure you have the following set up:
- **Android Emulator**: Set up and configure an Android emulator using [Android Studio Emulator](https://developer.android.com/studio/run/emulator).
- **iOS Simulator**: Set up and configure the iOS simulator using [Xcode Simulator](https://developer.apple.com/documentation/xcode/installing-additional-simulator-runtimes).

Make sure the emulators/simulators are running and accessible.

## Step 5: Configure Desired Capabilities

Change the desired capabilities in `wdio.conf.android.js` and `wdio.conf.ios.js` for Android and iOS applications respectively. Ensure the capabilities match your specific emulator/simulator setup.

### Example of Appium Desired Capabilities

#### Android Example (`wdio.conf.js`):

```javascript
exports.config = {
    // Other configurations...
    capabilities: [{
        // capabilities for local Appium web tests on an Android Emulator
        platformName: 'Android',
        'appium:deviceName': 'Pixel8',
        'appium:platformVersion': '15.0',
        'appium:app': 'C:\\Users\\nids1\\Downloads\\AndroidSauceLabs.apk',
        'appium:automationName': 'uiautomator2',
        'appium:appPackage': 'com.swaglabsmobileapp',
        'appium:appActivity': 'com.swaglabsmobileapp.SplashActivity',
        'appium:noReset': true,
        'appium:newCommandTimeout': 240
    }],
    // Other configurations...
};
```

Ensure that the `deviceName`, `appPackage` (for Android) are correctly configured based on your emulator/simulator and application setup.

## Step 6: Start Appium Server

Start the Appium server in the background using:

```bash
appium -p 4727
```

Make sure the Appium server is running on `localhost:4723`. If your server is running on a different host or port, update the configuration in the project accordingly.

## Step 7: Check Appium Doctor

Ensure Appium dependencies are correctly installed and configured by running:

```bash
appium-doctor
```

## Step 8: Check UIAutomator2 and XCUITest Drivers

Ensure UIAutomator2 and XCUITest drivers are installed and configured properly for Android and iOS respectively.

#### Checking UIAutomator2 for Android:

```bash
appium-doctor --android
```

If UIAutomator2 is not installed, install it using:

```bash
appium driver install uiautomator2
```

#### Checking XCUITest for iOS:

```bash
appium-doctor --ios
```

If XCUITest is not installed, install it using:

```bash
appium driver install xcuitest
```

## Step 9: Running Android Tests

Execute Android tests and generate reports:

```bash
npx wdio run wdio.conf.js
```

## Step 10: Checking Reports and Video Recordings

After running tests, check the following directories for reports and video recordings:

- **Reports Directory**: `./reports`