import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }, testInfo) => {
  console.log(`Running ${testInfo.title}`);
  await page.goto('http://www.google.com');
});

test('Google Page | Tools element present and spelled correctly', async ({ page }) => {

  const tools = page.locator('.t2vtad');
  const searchBox = page.getByRole('combobox', { name: 'Search' })
  const googleLogo = page.locator('.jfN4p');

  await page.getByRole('button', { name: 'Accept all' }).click();
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('test');
  await page.getByRole('listitem').filter({ hasText: 'testDelete' }).getByRole('option', { name: 'test' }).click();
  //verify that the searchbar is visible
  await expect(searchBox).toBeVisible();
  //verify that the toolbox element is visible
  await expect(tools).toBeVisible();
  //verify that the toolbox element contains name of 'Tools'
  await expect(tools).toContainText('Tools');
  ////verify that the google logo is visible
  await expect(googleLogo).toBeVisible();
});