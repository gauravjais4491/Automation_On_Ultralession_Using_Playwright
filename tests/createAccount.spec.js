const { customTest } = require('../Fixtures/createAccountFixture');
import createAccountData from '../Data/createAccountData.json'
import test from '@playwright/test';


test.beforeEach(async ({ context }) => {
  await context.clearCookies()
})

customTest('should create account', async ({ createAccount, generateData }, testInfo) => {
  const email = await generateData.generateEmailAddress()
  console.log(testInfo.title);
  await createAccount.addAccount(createAccountData.firstName, createAccountData.lastName, email, createAccountData.password, 100)
});


customTest.afterEach(async ({ page }) => {
  await page.waitForEvent('load')
})