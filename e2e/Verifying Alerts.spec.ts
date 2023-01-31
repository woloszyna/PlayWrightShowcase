import { test, expect, Browser } from '@playwright/test';
import { landingPage } from '../Support/Pages/Kitchen/landingPage.pages';
import { alertPage } from '../Support/Pages/Kitchen/alertPage.pages';


test.beforeEach(async ({ page }, testInfo) => {
    console.log(`Running ${testInfo.title}.`);
    const landingKITCHEN = new landingPage(page);
        await landingKITCHEN.goTo();
        await landingKITCHEN.accessAlert();
});

test('Verification of elements on page', async ({ page }) => {
    const alert = new alertPage(page);
    await expect(alert.triggerAlert).toBeVisible();
    await expect(alert.triggerConfirmation).toBeVisible();
    await expect(alert.triggerPrompt).toBeVisible();
});

test('User can click \'OK\' on Alert', async ({ page }) => {
    const alert = new alertPage(page);
    page.on('dialog', async (dialog) => {
        expect(dialog.type()).toBe('alert');
        expect(dialog.message()).toContain('Airfryers can make anything!');
        await dialog.accept();
        })
    await alert.clickTriggerAlert();
    expect(alert.alertCount).toHaveText('Triggered 1 time(s).');
});
