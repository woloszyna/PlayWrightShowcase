import { test, expect } from '@playwright/test';
import { elegantGemstoneNecklaceOrder } from '../Support/Pages/Nopcommerce/elegantGemstoneNecklaceOrder.pages';
import { jevelryPage } from '../Support/Pages/Nopcommerce/jevelryPage.pages';
import { landingPage } from '../Support/Pages/Nopcommerce/landingPage.pages';
import { shoppingCart } from '../Support/Pages/Nopcommerce/shoppingCart.pages';
import { checkOut } from '../Support/Pages/Nopcommerce/checkOut.pages';
import { registerPage } from '../Support/Pages/Nopcommerce/registerPage.pages';
import { regConfirmationPage } from '../Support/Pages/Nopcommerce/regConfirmationPage.pages';
import { myAccountPage } from '../Support/Pages/Nopcommerce/myAccountPAge.pages';

test.beforeEach(async ({ page }, testInfo) => {
    console.log(`Running ${testInfo.title}.`);
    const landing = new landingPage(page);
    await landing.goTo();
    
});

test('Successful Order journey', async ({ page }) => {
    const landing = new landingPage(page);
    const jevelry = new jevelryPage(page);
    const elegant = new elegantGemstoneNecklaceOrder(page);
    const shopCart = new shoppingCart(page);
    const checkout = new checkOut(page);
    const regPage = new registerPage(page);
    const regConfPage = new regConfirmationPage(page);
    const myAcc = new myAccountPage(page);

    await expect(landing.jevelryNavBtn).toBeVisible();
    await landing.accessJevelryPage();
    await expect(jevelry.moduleTitle).toHaveText('Jewelry');
    await expect(jevelry.product).toHaveText('Elegant Gemstone Necklace (rental)');
    await jevelry.accessElegantGemstoneNecklaceOrder();
    await expect(elegant.description).toContainText('For those who like jewelry, creating their ownelegant jewelry from gemstone beads provides an economical way to incorporate genuine gemstones into your jewelry wardrobe. Manufacturers create beads from all kinds of precious gemstones and semi-precious gemstones, which are available in bead shops, craft stores, and online marketplaces.');
    await elegant.provideStartDate();
    await expect(elegant.startDate).not.toBeEmpty();
    await elegant.provideEndDate();
    await expect(elegant.endDate).not.toBeEmpty();
    await elegant.clickRent();
    await expect(elegant.shoppingCart).toBeVisible();
    await elegant.accessShoppingCart();
    await expect(shopCart.checkOut).toBeVisible();
    await expect(shopCart.table).toBeVisible();
    await shopCart.termsAndConditions();
    await expect(shopCart.tncs).toBeChecked();
    await shopCart.accessCheckout();
    await expect(checkout.registerBtn).toBeVisible();
    await checkout.accessRegisterPage();
    await expect(regPage.regModal).toBeVisible();
    await regPage.provideMaleGender();
    await expect(regPage.gender).toBeChecked();
    await regPage.provideMaleFirstName();
    await expect(regPage.firstName).toHaveValue('Tester');
    await regPage.provideMaleLastName();
    await expect(regPage.lastName).toHaveValue('McTest');
    await regPage.provideMaleDOB();
    await expect(regPage.DOBDay).toHaveValue('1');
    await expect(regPage.DOBMonth).toHaveValue('1');
    await expect(regPage.DOBYear).toHaveValue('1984');
    await regPage.provideMaleEmailAddress();
    await expect(regPage.emailAddress).toHaveValue(regPage.emailAddressValue);
    await regPage.provideMaleCompanyName();
    await expect(regPage.companyName).toHaveValue('TestCompany');
    await regPage.uncheckNewsletter();
    await expect(regPage.newsletter).not.toBeChecked();
    await regPage.provideMalePassword();
    await expect(regPage.password).toHaveValue(regPage.passwordValue);
    await regPage.provideMalePasswordConfirmatiom();
    await expect(regPage.confirmPassword).toHaveValue(regPage.passwordValue);
    await regPage.clickRegButton();
    await expect(regConfPage.continueBtn).toBeVisible();
    await expect(regConfPage.regConfMessage).toContainText('Your registration completed');
    await regConfPage.clickContinue();
    await expect(shopCart.pageTitle).toHaveText('Shopping cart');
    await shopCart.accessLogin();
    await expect(checkout.loginBtn).toBeVisible();
    await checkout.logInProvideEmail();
    await expect(checkout.emailField).toHaveValue(regPage.emailAddressValue);
    await checkout.logInProvidePasword();
    await expect(checkout.passwordField).toHaveValue(regPage.passwordValue);
    await checkout.clickLogIn();
    await expect(shopCart.logOutOption).toBeVisible();
    await shopCart.accessMyAccountPage();
    await expect(myAcc.sidePannel).toBeVisible();
    await expect(myAcc.pageTitle).toHaveText('My account - Customer info');
    await expect(myAcc.emailField).toHaveValue(regPage.emailAddressValue);
});

test.afterEach(async ({ page }, testInfo) => {
    console.log(`${testInfo.title} has Passed.`);
    
    await page.close();
});