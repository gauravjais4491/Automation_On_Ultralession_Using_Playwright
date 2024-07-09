import describe, { test, expect } from "@playwright/test";



test.describe.configure({ mode: 'serial' })


let page;
let context;

test.describe('should First', () => {
  test.beforeAll(async ({ browser }) => {
    context = await browser.newContext();
    await context.clearCookies()
    page = await context.newPage();
  });

  test('should navigate to home page', async () => {
    await page.goto('/');
    await page.locator('.header__icon--account').click();
  });

  test('should enter username', async () => {
    await page.locator('#CustomerEmail').pressSequentially("noob_hacker@test.com", { delay: 500 })
  });

  test('should enter password', async () => {
    await page.getByPlaceholder('Password').pressSequentially("Noob_Hacker", { delay: 500 })
  });

  test('should click submit button', async () => {
    await page.getByRole('button', { name: 'Sign in' }).click()
  });

  test('should validate assestion', async () => {
    expect((await page.getByRole('link', { name: 'Log out' }).textContent()).trim()).toEqual('Log out')
  })

  test.afterAll(async () => {
    await context.close();
  });
});
