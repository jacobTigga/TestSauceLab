import { Given, When, Then } from '@cucumber/cucumber';
import { $, $$, driver } from '@wdio/globals';
import loginPage from '../pageobjects/login.page';
import SecurePage from '../pageobjects/secure.page';

// Step to open the app (for Appium, App is launched automatically)
Given('I open the app', async () => {
  // await driver.launchApp();
});

// Step to enter username
When('I enter the username {string}', async (username) => {
  await loginPage.inputUsername.setValue(username);
});

// Step to enter password
When('I enter the password {string}', async (password) => {
  await loginPage.inputPassword.setValue(password);
});

// Step to click Login button
When('I click on login button', async () => {
    await loginPage.btnSubmit.click();
    await driver.pause(3000);
  });

// Step to verify home screen is visible after login
Then('I should see the home screen', async () => {
    await expect(SecurePage.securePageLocator).toBeExisting();
});

Then('I logout the app', async () => {
  await loginPage.hamburgurButton.click();
  await loginPage.logoutButton.click();
});
