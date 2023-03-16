import { expect, Locator, Page } from '@playwright/test';


export class shoppingCart {

    readonly page: Page;
    readonly table: Locator;
    readonly pageTitle: Locator;
    readonly checkOut: Locator;
    readonly tncs: Locator;
    readonly loginOption: Locator;
    readonly logOutOption: Locator;
    readonly myAccountOption: Locator;

    constructor(page: Page) {
        this.table = page.locator('.cart');
        this.pageTitle = page.locator('.page-title')
        this.checkOut = page.getByRole('button', { name: 'Checkout' });
        this.tncs = page.locator('#termsofservice');
        this.loginOption = page.locator('.ico-login')
        this.logOutOption = page.locator('.ico-logout');
        this.myAccountOption = page.locator('.ico-account');
    }

    async termsAndConditions() {
        this.tncs.check();
    }

    async accessCheckout() {
        this.checkOut.click();
    }

    async accessLogin() {
        this.loginOption.click();
    }

    async accessMyAccountPage() {
        this.myAccountOption.click()
    }
}