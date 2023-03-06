import { expect, Locator, Page } from '@playwright/test';


export class shoppingCart {

    readonly page: Page;
    readonly table: Locator;
    readonly checkOut: Locator;
    readonly tncs: Locator;


    constructor(page: Page) {
        this.table = page.locator('.cart');
        this.checkOut = page.getByRole('button', { name: 'Checkout' });
        this.tncs = page.locator('#termsofservice');
    }

    async termsAndConditions() {
        this.tncs.check();
    }

    async accessCheckout() {
        this.checkOut.click();
    }

}