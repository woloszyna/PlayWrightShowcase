import { test, expect, Browser } from '@playwright/test';
import { addRemoveElementsPage } from '../Support/Pages/HerokuApp/addRemoveElementsPage.pages';
import { landingPage } from '../Support/Pages/HerokuApp/landingPage.pages';

test.beforeEach(async ({ page }, testInfo) => {
    console.log(`Running ${testInfo.title}.`);
    const landing = new landingPage(page);
        await landing.goTo();
        await landing.accessAddRemoveElements();
});

test('Correct page displayed', async ({ page }) => {
    const addRemoveElements = new addRemoveElementsPage(page);
        await expect(page).toHaveTitle('The Internet');
        await expect(addRemoveElements.heading).toHaveText('Add/Remove Elements');
        await expect(addRemoveElements.addElementBtn).toBeVisible();
});
    
test('One Element Can be successfully added and removed', async ({ page }) => {
    const addRemoveElements = new addRemoveElementsPage(page);
        await addRemoveElements.addElement();
        await addRemoveElements.deleteElement();
        await expect(addRemoveElements.removeElements).not.toBeVisible();

});

test('Multiple Elements Can be successfully added', async ({ page }) => {
    const addRemoveElements = new addRemoveElementsPage(page);
        await addRemoveElements.addFiveElements();
        await expect(addRemoveElements.removeElements).toHaveCount(5);
});

test('Multiple Elements Can be successfully added and removed', async ({ page }) => {
    const addRemoveElements = new addRemoveElementsPage(page);
        await addRemoveElements.addFiveElements();
        await addRemoveElements.removeFiveElements();
        await expect(addRemoveElements.removeElements).toHaveCount(0);
});

test('Elements that are not removed are succesfully retained on the page', async ({ page }) => {
    const addRemoveElements = new addRemoveElementsPage(page);
        await addRemoveElements.addFiveElements();
        await addRemoveElements.removeFourElements();
        await expect(addRemoveElements.removeElements).toHaveCount(1);
});

test.afterEach(async ({ page }, result) => {
    console.log(`Test ${result.status}.`);//
});
//