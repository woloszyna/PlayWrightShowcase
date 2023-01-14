import { test, expect } from "@playwright/test";
require('dotenv').config();

test.describe('Dealing with checkboxes', () => {
    
    test.beforeEach(async ({ page }) => {
        await page.goto(process.env.HEROKUAPP_URL);
        await page.getByRole('link', { name: 'Checkboxes' }).click();
    })

    test('Can check first checkbox ', async ({ page }) => {
        const checkbox1 = page.getByRole('checkbox').first();
        const checkbox2 = page.getByRole('checkbox').nth(1);
        
        await checkbox1.check();
        await checkbox2.uncheck();

        expect(checkbox1).toBeChecked();
        expect(checkbox2).not.toBeChecked();
    })

    test('Can check second checkbox ', async ({ page }) => {
        const checkbox1 = page.getByRole('checkbox').first();
        const checkbox2 = page.getByRole('checkbox').nth(1);
        
        expect(checkbox1).not.toBeChecked();
        expect(checkbox2).toBeChecked();
    })

    test('Can check both checkboxes ', async ({ page }) => {
        const checkbox1 = page.getByRole('checkbox').first();
        const checkbox2 = page.getByRole('checkbox').nth(1);
        
        await checkbox1.check();

        expect(checkbox1).toBeChecked();
        expect(checkbox2).toBeChecked();
        
    })

    test('Page returns to the original state when reloaded - upper checkbox checked ', async ({ page }) => {
        const checkbox1 = page.getByRole('checkbox').first();
        const checkbox2 = page.getByRole('checkbox').nth(1);

        expect(checkbox1).not.toBeChecked();
        expect(checkbox2).toBeChecked();
        
        await checkbox1.check();
        await checkbox2.uncheck();

        await page.reload();

        expect(checkbox1).not.toBeChecked();
        expect(checkbox2).toBeChecked();
    })

    test('Page returns to the original state when reloaded - bottom checkbox checked ', async ({ page }) => {
        const checkbox1 = page.getByRole('checkbox').first();
        const checkbox2 = page.getByRole('checkbox').nth(1);

        expect(checkbox1).not.toBeChecked();
        expect(checkbox2).toBeChecked();

        await page.reload();

        expect(checkbox1).not.toBeChecked();
        expect(checkbox2).toBeChecked();
    })

    test('Page returns to the original state when reloaded - both checkboxes checked ', async ({ page }) => {
        const checkbox1 = page.getByRole('checkbox').first();
        const checkbox2 = page.getByRole('checkbox').nth(1);

        expect(checkbox1).not.toBeChecked();
        expect(checkbox2).toBeChecked();
        
        await checkbox1.check();

        await page.reload();

        expect(checkbox1).not.toBeChecked();
        expect(checkbox2).toBeChecked();
    })

    test('Page returns to the original state when reloaded - no checkboxes checked ', async ({ page }) => {
        const checkbox1 = page.getByRole('checkbox').first();
        const checkbox2 = page.getByRole('checkbox').nth(1);

        expect(checkbox1).not.toBeChecked();
        expect(checkbox2).toBeChecked();
        
        await checkbox2.uncheck();

        await page.reload();

        expect(checkbox1).not.toBeChecked();
        expect(checkbox2).toBeChecked();
    })
})