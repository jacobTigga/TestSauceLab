
# Appium Cucumber-js Project

This project utilizes Appium and Cucumber-js for automated testing of mobile applications. It provides scripts to install dependencies, configure desired capabilities for Android and iOS, start the Appium server, check Appium doctor, run Android and iOS tests, and generate test reports.

## Technologies/Tools Used

- **IDE**: Visual Studio Code (VS Code)
- **Mobile Automation**: Appium
- **Package Manager**: npm (Node Package Manager)
- **Build Automation**: WebdriverIO (wdio)
- **Programming Language**: JavaScript
- **BDD Framework**: Cucumber
- **DSL**: Gherkin
- **Unit Testing Framework**: Mocha
- **Reporting**: Allure Reports
- **Data Formats**: JSON
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

#### Android Example (`wdio.conf.android.js`):

```javascript
exports.config = {
    // Other configurations...
    capabilities: [{
        platformName: 'Android',
        deviceName: 'emulator-5554', // Replace with your emulator/device ID
        appPackage: 'com.example.androidapp',
        appActivity: '.MainActivity',
        automationName: 'UiAutomator2'
        // Add other desired capabilities as needed
    }],
    // Other configurations...
};
```

#### iOS Example (`wdio.conf.ios.js`):

```javascript
exports.config = {
    // Other configurations...
    capabilities: [{
        platformName: 'iOS',
        platformVersion: '14.5',
        deviceName: 'iPhone 12',
        app: '/path/to/your/app.app', // Replace with path to your .app or .ipa file
        automationName: 'XCUITest'
        // Add other desired capabilities as needed
    }],
    // Other configurations...
};
```

Ensure that the `deviceName`, `appPackage` (for Android), `appActivity` (for Android), `platformVersion`, and `app` (for iOS) are correctly configured based on your emulator/simulator and application setup.

## Step 6: Start Appium Server

Start the Appium server in the background using:

```bash
appium -p 4723
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
npm run wdio:android
```

## Step 10: Running iOS Tests

Execute iOS tests and generate reports:

```bash
npm run wdio:ios
```

## Step 11: Checking Reports and Video Recordings

After running tests, check the following directories for reports and video recordings:

- **Reports Directory**: `./reports`
- **Video Recording**: [View Video Recording](https://drive.google.com/file/d/1TmWouF8eEuUsGwslgcJz9xN6fAb7oF1L/view?usp=sharing)

You can access the video recording by clicking on the [View Video Recording](https://drive.google.com/file/d/1TmWouF8eEuUsGwslgcJz9xN6fAb7oF1L/view?usp=sharing) link. Here's a preview of the video:

![Video Preview](https://drive.google.com/uc?export=view&id=1TmWouF8eEuUsGwslgcJz9xN6fAb7oF1L)


## References

- [wd](https://github.com/admc/wd): WebDriver client for Node.js.
- [Appium Sample Code](https://github.com/appium-boneyard/sample-code/tree/master/sample-code/examples/node): Official Appium sample code repository.
- [Cucumber-JS](https://github.com/cucumber/cucumber-js): Cucumber for JavaScript.
- [Allure Framework](https://docs.qameta.io/allure/): Framework designed to create detailed and comprehensive reports for test automation projects.
- [Android Studio Emulator](https://developer.android.com/studio/run/emulator): Emulator provided by Android Studio for testing Android applications.
- [Xcode Simulator](https://developer.apple.com/documentation/xcode/running_your_app_in_the_simulator_or_on_a_device): Simulator provided by Xcode for testing iOS applications.
