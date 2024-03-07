// @ts-check
const { expect } = require('@playwright/test');
const { customTest } = require('../Fixtures/createAccountFixture');

customTest.beforeEach(async ({ page, context }) => {
  await context.clearCookies()
  await page.goto('/', { waitUntil: 'networkidle' })
});


customTest('has title', async ({ page, createAccount }) => {
  console.log((await createAccount.logout.textContent())?.trim());
  expect((await createAccount.logout.textContent())?.trim()).toBe('Log out')
  await page.pause()
});


