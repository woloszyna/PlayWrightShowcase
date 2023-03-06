import { expect, Locator, Page } from '@playwright/test';

export class elegantGemstoneNecklaceOrder {

    readonly page: Page;
    readonly startDate: Locator;
    readonly endDate: Locator;
    readonly rentBtn: Locator;
    readonly description: Locator;
    readonly shoppingCart: Locator;
    

    constructor(page: Page) {
        this.startDate = page.locator('#rental_start_date_40');
        this.endDate = page.locator('#rental_end_date_40');
        this.rentBtn = page.getByRole('button', { name: 'Rent' });
        this.description = page.locator('#product-details-form > div:nth-child(2) > div.product-essential > div.full-description > p');
        this.shoppingCart = page.locator('#topcartlink > a > span.cart-label');
    }

    provideStartDate() {
        
        var date = new Date();
        this.startDate.fill(date.toLocaleDateString());
    }

    provideEndDate() {
        var date = new Date();
        this.endDate.fill(date.toLocaleDateString());
    }

    clickRent() {
        this.rentBtn.click();
    }

    accessShoppingCart() {
        this.shoppingCart.click();
    }

}