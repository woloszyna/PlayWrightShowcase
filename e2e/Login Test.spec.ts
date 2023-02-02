import { test, expect } from '@playwright/test';
import { landigPage } from '../Support/Pages/SwagLabs/landingPage.pages';

test.beforeEach(async ({ page }, testInfo) => {
    console.log(`Running ${testInfo.title}.`);
    const landing = new landigPage(page);
    await landing.goTo();
});

test('Correct elements display on the page', async ({ page }) => {
    const landing = new landigPage(page);
    expect(landing.loginFld).toBeVisible();
    expect(landing.password).toBeVisible();
    expect(landing.loginBtn).toBeVisible();
});    

test('Cannot login with incorrect login', async ({ page }) => {
    const landing = new landigPage(page);
    await landing.incorrectLogin();
    await expect(landing.errorBtn).toHaveText('Epic sadface: Username and password do not match any user in this service');
});

test('Cannot login with incorrect password', async ({ page }) => {
    const landing = new landigPage(page);

});

test('Can login into stadard_user account with correct credentials', async ({ page }) => {
    const landing = new landigPage(page);

});

test('Can login into locked_out_user account with correct credentials', async ({ page }) => {
    const landing = new landigPage(page);

});

test('Can login into problem_user account with correct credentials', async ({ page }) => {
    const landing = new landigPage(page);

});

test('Can login into performance_glitch_user with account correct credentials', async ({ page }) => {
    const landing = new landigPage(page);

});