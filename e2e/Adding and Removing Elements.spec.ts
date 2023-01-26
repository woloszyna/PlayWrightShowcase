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

test('The Add Element Button has correct attributes', async ({ page }) => {
    const addRemoveElements = new addRemoveElementsPage(page);
        await expect(addRemoveElements.addElementBtn).toHaveCSS('background-color', 'rgb(43, 166, 203)');
        await expect(addRemoveElements.addElementBtn).toHaveCSS('border-color', 'rgb(34, 132, 161)');
        await expect(addRemoveElements.addElementBtn).toHaveCSS('color', 'rgb(255, 255, 255)');
        await expect(addRemoveElements.addElementBtn).toHaveCSS('font-size', '16px');
        await expect(addRemoveElements.addElementBtn).toHaveCSS('text-align', 'center');
        await expect(addRemoveElements.addElementBtn).toHaveCSS('font-family', '\"Helvetica Neue\", Helvetica, Helvetica, Arial, sans-serif');
        await expect(addRemoveElements.addElementBtn).toHaveCSS('font-weight', '700');
});

test('Delete Element Button has correct attributes', async ({ page }) => {
    const addRemoveElements = new addRemoveElementsPage(page);
        await addRemoveElements.addElement();
        await expect(addRemoveElements.removeElements).toBeVisible();
        await expect(addRemoveElements.removeElements).toHaveCSS('background-color', 'rgb(43, 166, 203)');
        await expect(addRemoveElements.removeElements).toHaveCSS('border-color', 'rgb(34, 132, 161)');
        await expect(addRemoveElements.removeElements).toHaveCSS('color', 'rgb(255, 255, 255)');
        await expect(addRemoveElements.removeElements).toHaveCSS('font-size', '16px');
        await expect(addRemoveElements.removeElements).toHaveCSS('text-align', 'center');
        await expect(addRemoveElements.removeElements).toHaveCSS('font-family', '\"Helvetica Neue\", Helvetica, Helvetica, Arial, sans-serif');
        await expect(addRemoveElements.removeElements).toHaveCSS('font-weight', '700');

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
    console.log(`Test Result: ${result.status}`);
});
