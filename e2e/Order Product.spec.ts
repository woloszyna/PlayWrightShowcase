import { test, expect } from '@playwright/test';
import { elegantGemstoneNecklaceOrder } from '../Support/Pages/Nopcommerce/elegantGemstoneNecklaceOrder.pages';
import { jevelryPage } from '../Support/Pages/Nopcommerce/jevelryPage.pages';
import { landingPage } from '../Support/Pages/Nopcommerce/landingPage.pages';
import { shoppingCart } from '../Support/Pages/Nopcommerce/shoppingCart.pages';
import { checkOut } from '../Support/Pages/Nopcommerce/checkOut.pages';
import { registerPage } from '../Support/Pages/Nopcommerce/registerPage.pages';

test.beforeEach(async ({ page }, testInfo) => {
    console.log(`Running ${testInfo.title}.`);
    const landing = new landingPage(page);
    await landing.goTo();
});

test('Successful Order journey', async ({ page }) => {
    const landing = new landingPage(page);
    const jevelry = new jevelryPage(page);
    const elegant = new elegantGemstoneNecklaceOrder(page);
    const shopCart = new shoppingCart(page);
    const checkout = new checkOut(page);
    const regPage = new registerPage(page);

    await expect(landing.jevelryNavBtn).toBeVisible();
    await landing.accessJevelryPage();
    await expect(jevelry.moduleTitle).toHaveText('Jewelry');
    await expect(jevelry.product).toHaveText('Elegant Gemstone Necklace (rental)');
    await jevelry.accessElegantGemstoneNecklaceOrder();
    await expect(elegant.description).toContainText('For those who like jewelry, creating their ownelegant jewelry from gemstone beads provides an economical way to incorporate genuine gemstones into your jewelry wardrobe. Manufacturers create beads from all kinds of precious gemstones and semi-precious gemstones, which are available in bead shops, craft stores, and online marketplaces.');
    await elegant.provideStartDate();
    await expect(elegant.startDate).not.toBeEmpty();
    await elegant.provideEndDate();
    await expect(elegant.endDate).not.toBeEmpty();
    await elegant.clickRent();
    await expect(elegant.shoppingCart).toBeVisible();
    await elegant.accessShoppingCart();
    await expect(shopCart.checkOut).toBeVisible();
    await expect(shopCart.table).toBeVisible();
    await shopCart.termsAndConditions();
    await expect(shopCart.tncs).toBeChecked();
    await shopCart.accessCheckout();
    await expect(checkout.registerBtn).toBeVisible();
    await checkout.accessRegisterPage();
    await expect(regPage.regModal).toBeVisible();
    await regPage.provideRegisterMaleDetails();
    await page.waitForTimeout(1000);
    await regPage.clickRegButton();
    await page.waitForTimeout(1000);

});