import { expect, Locator, Page } from '@playwright/test';
require('dotenv').config();

export class landingPage {
    readonly url: string;
    readonly page: Page;
    readonly jevelryNavBtn: Locator;


    constructor(page: Page) {
        this.page = page;
        this.url = process.env.NOPCOMMERCE;
        this.jevelryNavBtn = page.locator('body > div.master-wrapper-page > div.header-menu > ul.top-menu.notmobile > li:nth-child(6) > a')
    }


    async goTo() {
        await this.page.goto(this.url);
    }

    async accessJevelryPage() {
        await this.jevelryNavBtn.click();
    }
}