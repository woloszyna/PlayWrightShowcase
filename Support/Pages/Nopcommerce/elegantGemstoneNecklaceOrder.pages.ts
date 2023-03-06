import { expect, Locator, Page } from '@playwright/test';

export class elegantGemstoneNecklaceOrder {

    readonly page: Page;
    readonly startDate: Locator;
    readonly endDate: Locator;
    readonly rentBtn: Locator;
    readonly description: Locator;
    readonly shoppingCart: Locator;
    readonly banner: Locator;
    readonly jevelryNavBtn: Locator;
        
    constructor(page: Page) {
        this.startDate = page.locator('#rental_start_date_40');
        this.endDate = page.locator('#rental_end_date_40');
        this.rentBtn = page.getByRole('button', { name: 'Rent' });
        this.description = page.locator('#product-details-form > div:nth-child(2) > div.product-essential > div.full-description > p');
        this.banner = page.locator('.close');
        //this.shoppingCart = page.locator('#bar-notification > div > p > a');        
        this.shoppingCart = page.locator('#bar-notification > div > p > a');
    }

    async provideStartDate() {
        
        var date = new Date();
        this.startDate.fill(date.toLocaleDateString());
    }

    async provideEndDate() {
        var date = new Date();
        this.endDate.fill(date.toLocaleDateString());
    }

    async clickRent() {
        this.rentBtn.click();
    }

    async accessShoppingCart() {
        this.shoppingCart.click();
    }

}