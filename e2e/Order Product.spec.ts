import { test, expect } from '@playwright/test';
import { elegantGemstoneNecklaceOrder } from '../Support/Pages/Nopcommerce/elegantGemstoneNecklaceOrder.pages';
import { jevelryPage } from '../Support/Pages/Nopcommerce/jevelryPage.pages';
import { landingPage } from '../Support/Pages/Nopcommerce/landingPage.pages';

test.beforeEach(async ({ page }, testInfo) => {
    console.log(`Running ${testInfo.title}.`);
    const landing = new landingPage(page);
    await landing.goTo();
});

test('Successful Order journey', async ({ page }) => {
    const landing = new landingPage(page);
    const jevelry = new jevelryPage(page);
    const elegant  = new elegantGemstoneNecklaceOrder(page);

    await expect(landing.jevelryNavBtn).toBeVisible();
    await landing.accessJevelryPage();
    await expect(jevelry.moduleTitle).toHaveText('Jewelry');
    await expect(jevelry.product).toHaveText('Elegant Gemstone Necklace (rental)');
    await jevelry.accessElegantGemstoneNecklaceOrder();
    await expect(elegant.description).toContainText('For those who like jewelry, creating their ownelegant jewelry from gemstone beads provides an economical way to incorporate genuine gemstones into your jewelry wardrobe. Manufacturers create beads from all kinds of precious gemstones and semi-precious gemstones, which are available in bead shops, craft stores, and online marketplaces.');
    await elegant.addToCart();
    //Format dates correctly, and fix date in startDate
});