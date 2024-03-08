const { customTest } = require('../Fixtures/createAccountFixture');
import createAccountData from '../Data/createAccountData.json'
import test, { expect } from '@playwright/test';


test.beforeEach(async ({ context }) => {
  await context.clearCookies()
})

customTest('should create account', async ({ createAccount, generateData, securePageForCreateAccount }, testInfo) => {
  const email = await generateData.generateEmailAddress()
  console.log(testInfo.title);
  await createAccount.addAccount(createAccountData.firstName, createAccountData.lastName, email, createAccountData.password, createAccountData.delay)
  await securePageForCreateAccount.clickAccount()
  expect((await securePageForCreateAccount.logoutBtn.textContent())?.trim()).toBe('Log out')
});