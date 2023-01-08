import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }, testInfo) => {
  console.log(`Running ${testInfo.title}`);
  await page.goto('http://www.google.com');
});

test('Google Page | Tools element present and spelled correctly', async ({ page }) => {

  const tools = page.locator('.t2vtad');
  const googleLogo = page.locator('.jfN4p');

  await page.getByRole('button', { name: 'Accept all' }).click();
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('test');
  await page.getByRole('listitem').filter({ hasText: 'testDelete' }).getByRole('option', { name: 'test' }).click();
  await expect(tools).toBeVisible();
  await expect(tools).toContainText('Tools');
});


test('Google Page | Google logo in place', async ({ page }) => {

  const googleLogo = page.locator('.jfN4p');

  await page.getByRole('button', { name: 'Accept all' }).click();
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('test');
  await page.getByRole('listitem').filter({ hasText: 'testDelete' }).getByRole('option', { name: 'test' }).click();
  await expect(googleLogo).toBeVisible();
});