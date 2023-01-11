import { test, expect } from '@playwright/test';
require('dotenv').config();

test.beforeEach(async ({ page }, testInfo) => {
  console.log(`Running ${testInfo.title}`);
  await page.goto(process.env.BASE_URL);
  await page.getByRole('link', { name: 'Add/Remove Elements' }).click();
});

//TESTING
test('Internet | Add/Remove Elements | Correct Page displays', async ({ page }) => {
    //Test Scenario:
    //1. Verify if page title is correct
  await expect(page).toHaveTitle('The Internet');
    //2. Verify that SUbject element is present
  await expect(page.getByRole('button', { name: 'Add Element' })).toBeVisible();
});

test('Internet | Add/Remove Elements | Elements can be successfully added on the webpage', async ({ page }) => {
  const AddElementBtn = page.getByRole('button', { name: 'Add Element' })
  //Test Scenario:
    //1. Add Multiple elements (5)
  await AddElementBtn.click();

  await AddElementBtn.click();
  await AddElementBtn.click();
  await AddElementBtn.click();
  await AddElementBtn.click();
    //Verify if 5 elements were added
  expect(page.locator('#elements').count(5));
});


test('Internet | Add/Remove Elements | Elements can be successfully removed from the webpage', async ({ page }) => {
  const AddElementBtn = page.getByRole('button', { name: 'Add Element' })
  const DeleteBtn = page.getByRole('button', { name: 'Delete' })

  //Test Scenario:
    //1. Add Multiple elements (5)
  await AddElementBtn.click();
  await AddElementBtn.click();
  await AddElementBtn.click();
  await AddElementBtn.click();
  await AddElementBtn.click();

  //2. Remove all elements but one
  await page.locator('#elements > button:nth-child(5)').click();
  await page.locator('#elements > button:nth-child(4)').click();
  await page.locator('#elements > button:nth-child(3)').click();
  await page.locator('#elements > button:nth-child(2)').click();

    //Verify if 1 element is still visible
  expect(await page.locator('#elements > button').count()).toEqual(1);
});


test('Internet | Add/Remove Elements | All elements can be successfully removed from the webpage', async ({ page }) => {
  const AddElementBtn = page.getByRole('button', { name: 'Add Element' })
  const DeleteBtn = page.getByRole('button', { name: 'Delete' })

  //Test Scenario:
    //1. Add Multiple elements (5)
  await AddElementBtn.click();
  await AddElementBtn.click();
  await AddElementBtn.click();
  await AddElementBtn.click();
  await AddElementBtn.click();

  //2. Remove all elements but one
  await page.locator('#elements > button:nth-child(5)').click();
  await page.locator('#elements > button:nth-child(4)').click();
  await page.locator('#elements > button:nth-child(3)').click();
  await page.locator('#elements > button:nth-child(2)').click();
  await page.locator('#elements > button:nth-child(1)').click();

    //Verify if 1 element is still visible
  //expect(page.locator('#elements').isVisible());
  expect(await page.locator('#elements > button').count()).toEqual(0);
  //count()).toBeGreaterThanOrEqual(1);
});



/*Test Scenario:

1. Access Web Page
2. Add 10 elements
3. Remove first 5 elements
*/



/*Test Scenario:

1. Access Web Page
2. Add Multiple elements
3. Remove all elements
*/