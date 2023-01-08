import { test, expect } from '@playwright/test';

test('Google Page test', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.getByRole('button', { name: 'Accept all' }).click();
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('test');
  await page.getByRole('listitem').filter({ hasText: 'testDelete' }).getByRole('option', { name: 'test' }).click();
});