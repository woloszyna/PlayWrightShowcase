import { expect, Locator, Page } from '@playwright/test';

export class elegantGemstoneNecklaceOrder {

    readonly page: Page;
    readonly startDate: Locator;
    readonly endDate: Locator;
    readonly rentBtn: Locator;
    readonly description: Locator;




    constructor(page: Page) {
        this.startDate = page.locator('#rental_start_date_40');
        this.endDate = page.locator('#rental_end_date_40');
        this.rentBtn = page.getByRole('button', { name: 'Rent' });
        this.description = page.locator('#product-details-form > div:nth-child(2) > div.product-essential > div.full-description > p');
    }

    addToCart() {
        //format date and make sure that is appears in the box
        this.startDate.fill(Date());
        this.endDate.fill(Date());
        this.rentBtn.click();
    }

}