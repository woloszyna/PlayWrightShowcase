import { test, expect } from '@playwright/test';
require('dotenv').config();

test.describe('Dealing with Alerts', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://kitchen.applitools.com/ingredients/alert');
    });

    test('should trigger an alert', async ({ page }) => {
        page.on('dialog', async (dialog) => {
            expect(dialog.message()).toContain('Airfryers can make anything!')
            await dialog.dismiss();
        })
        await page.click('#alert-button');
    });

    test('should trigger an confirmation with a message - dismiss', async ({ page }) => {
        page.on('dialog', async (dialog) => {
            expect(dialog.message()).toContain('Proceed with adding garlic?')
            await dialog.dismiss();
        })
        await page.click('#confirm-button');
    });

    test('should trigger an confirmation with a message - accept', async ({ page }) => {
        page.on('dialog', async (dialog) => {
            expect(dialog.message()).toContain('Proceed with adding garlic?')
            await dialog.accept();
        })
        await page.click('#confirm-button');
    });

    test('should trigger an alert with a prompt - dismiss', async ({ page }) => {
        page.on('dialog', async (dialog) => {
            expect(dialog.message()).toContain('What is your favorite food?')
            await dialog.dismiss('dissmiss dissmiss dissmiss dissmiss dissmiss dissmiss ');
        })
        await page.click('#prompt-button');
    });

    test('should trigger an alert with a prompt - accept', async ({ page }) => {
        page.on('dialog', async (dialog) => {
            expect(dialog.message()).toContain('What is your favorite food?')
            await dialog.accept('accept accept accept accept accept accept');
        })
        await page.click('#prompt-button');
    });

});