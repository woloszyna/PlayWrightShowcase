import { test, expect } from "@playwright/test";
require('dotenv').config();

    test.beforeEach(async ({ page }, testInfo) => {
        console.log(`Running ${testInfo.title}`);
        await page.goto(process.env.HEROKUAPP_URL);
        await page.getByRole('link', { name: 'Context Menu' }).click();
    });

    test('Correct page displays', async ({ page }) => {
        await expect(page).toHaveTitle('The Internet');
        await expect(page.getByRole('heading')).toHaveText('Context Menu');
    });

    test('Clickable element has correct dimentions', async ({ page }) => {
        const box = await page.locator('#hot-spot');
        const width = await box.evaluate((e) => {
            return window.getComputedStyle(e).getPropertyValue('width')
        });
        const height = await box.evaluate((e) => {
            return window.getComputedStyle(e).getPropertyValue('height')
        });

        await expect(width).toBe('250px')
        await expect(height).toBe('150px')

    });

    test('Alert populates when user right-clicks on the element', async ({ page }) => {
        page.on('dialog', async (dialog) => {
            await expect(dialog.message()).toContain('You selected a context menu')
            await dialog.accept();
        });
        await page.locator('#hot-spot').click({ button: "right" });

    });