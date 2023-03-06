import { expect, Locator, Page } from '@playwright/test';


export class jevelryPage {
    readonly page: Page;
    readonly moduleTitle: Locator;
    readonly product: Locator;
    readonly rentBtn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.moduleTitle = page.locator('.page-title');
        this.product = page.locator('body > div.master-wrapper-page > div.master-wrapper-content > div > div.center-2 > div > div.page-body > div.products-container > div.products-wrapper > div > div > div:nth-child(1) > div > div.details > h2 > a');
        this.rentBtn = page.getByRole('button', {name: 'Rent'});
    }

    async accessElegantGemstoneNecklaceOrder() {
        this.rentBtn.click();
    }
}


