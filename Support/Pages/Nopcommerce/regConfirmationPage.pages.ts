import { expect, Locator, Page } from '@playwright/test';


export class regConfirmationPage {

    readonly page: Page;
    readonly continueBtn: Locator;



    constructor(page: Page) {
        this.continueBtn = page.locator('body > div.master-wrapper-page > div.master-wrapper-content > div > div > div > div.page-body > div.buttons > a');

    }

    async clickContinue() {
        this.continueBtn.click();
    }
}