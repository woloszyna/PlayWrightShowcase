import { test, expect } from '@playwright/test';
require('dotenv').config();

//test.beforeEach(async ({ page, browser }, testInfo) => { <-- John
test.beforeEach(async ({ page }, testInfo) => {
    console.log(`Running ${testInfo.title}`);
    await page.goto(process.env.BASE_URL);
    await page.getByRole('link', { name: 'Basic Auth' }).click();
});

/*
test('Internet | Basic Auth | Page elements are present', async ({ page }) => {

    page.on('dialog', async (dialog) => {
        expect(dialog.message()).toEqual('Sing in to access this site')
        //await dialog.accept('Testersdock')
        dialog.type(process.env.ADMIN_LOGIN);
        
    })
    //await page.locator('text=Click for JS Prompt').click()
    //await expect(page.locator('#result')).toHaveText('You entered: Testersdock')

});
*/

test('Dupa - Input text in prompt, Click OK and Validate Input Text', async ({page }) => {
    page.on('dialog', async (dialog) => {
        expect(dialog.message()).toEqual('Sing in to access this site')
        await dialog.accept('Testersdock');
        })
      //await page.locator('text=Click for JS Prompt').click()
      //await expect(page.locator('#result')).toHaveText(
        //'You entered: Testersdock'
      //)
})
    

/*
test('Internet | Basic Auth | baseline', async ({ page }) => {

});

test('Internet | Basic Auth | baseline', async ({ page }) => {

});

test('Internet | Basic Auth | baseline', async ({ page }) => {

});

test('Internet | Basic Auth | baseline', async ({ page }) => {

});

test('Internet | Basic Auth | baseline', async ({ page }) => {

});

test('Internet | Basic Auth | baseline', async ({ page }) => {

});
*/