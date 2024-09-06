const { customTest } = require('../../Fixtures/createAccountFixture');
import createAccountData from '../../Data/createAccountData.json'
import { expect } from '@playwright/test';

let email;
customTest.beforeEach(async ({ context, generateData, homePage, login }) => {
  await context.clearCookies()
  email = await generateData.generateEmailAddress()
  await homePage.goToLoginPage()
  await login.goToCreateAccountPage()
})

customTest('should create account', async ({ createAccount, securePageForCreateAccount, captcha }, testInfo) => {
  await createAccount.addAccount(createAccountData.firstName, createAccountData.lastName, email, createAccountData.password, createAccountData.delay)
  if (await captcha.checkForCaptcha(testInfo.title)) {
    console.log(`Captcha Caught in ${testInfo.title}: `, (await captcha.flashCaptcha.textContent())?.trim());
  }
  else {
    await securePageForCreateAccount.clickAccount()
    expect((await securePageForCreateAccount.logoutBtn.textContent())?.trim()).toBe(createAccountData.expectedTextForCreateAccount)
  }
});