import test, { expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
    await test.step('navigation', async () => {
        await page.goto('/')
    })
})
test.fail('should take screenshot', async ({ page }) => {
    await expect(page).toHaveScreenshot({
        mask: [page.getByRole('heading', { name: 'ul-web-playground' }).getByRole('link')],
        maskColor: "red"
    })
})