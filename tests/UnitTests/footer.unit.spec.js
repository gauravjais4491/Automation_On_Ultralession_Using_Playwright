
// Just for the demo because we all know unit test will be written by developer


import { expect } from "playwright/test";
import { customTest } from '../../Fixtures/footerFixture.js'


customTest('should footer present in home page', async ({ footer }) => {
    await expect(footer.isFooterPresent).toBeVisible()
})

customTest('should footer present in contact page', async ({ footer, homePage }) => {
    await homePage.goToContactPage()
    await expect(footer.isFooterPresent).toBeVisible()
})

customTest('should footer present in store page', async ({ footer, homePage  }) => {
    await homePage.goToStorePage()
    await expect(footer.isFooterPresent).toBeVisible()
})

customTest('should quick links present in home page', async ({ footer }) => {
    await expect(footer.isQuickLinksPresent).toBeVisible()
})

customTest('should quick links present in contact page', async ({ footer, homePage }) => {
    await homePage.goToContactPage()
    await expect(footer.isQuickLinksPresent).toBeVisible()
})

customTest('should quick links present in store page', async ({ footer, homePage }) => {
    await homePage.goToStorePage()
    await expect(footer.isQuickLinksPresent).toBeVisible()
})



