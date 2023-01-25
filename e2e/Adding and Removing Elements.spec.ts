import { test, expect, Browser } from '@playwright/test';
import { addRemoveElementsPage } from '../Support/Pages/HerokuApp/addRemoveElementsPage.pages';
import { landingPage } from '../Support/Pages/HerokuApp/landingPage.pages';
require('dotenv').config();

test.beforeEach(async ({ page }, testInfo) => {
    console.log(`Running ${testInfo.title}`);
    const landing = new landingPage(page);
    const addRemoveElements = new addRemoveElementsPage(page);

        await landing.goTo();
        await landing.accessAddRemoveElements();
});

test('Correct page displayed', async ({ page }) => {
    //const landing = new landingPage(page);
    const addRemoveElements = new addRemoveElementsPage(page);

        await expect(page).toHaveTitle('The Internet');
        await expect(addRemoveElements.heading).toHaveText('Add/Remove Elements');
        await expect(addRemoveElements.addElementBtn).toBeVisible();
});
    
test('One Element Can be successfully added and removed', async ({ page }) => {
    //const landing = new landingPage(page);
    const addRemoveElements = new addRemoveElementsPage(page);

    await addRemoveElements.addElement();
    await addRemoveElements.deleteElement();

});

test('Multiple Elements Can be successfully added', async ({ page }) => {
    //const landing = new landingPage(page);
    const addRemoveElements = new addRemoveElementsPage(page);

    await addRemoveElements.addFiveElements();
    await expect(addRemoveElements.removeElements).toHaveCount(5);

});