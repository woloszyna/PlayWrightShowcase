import { expect, Locator, Page } from '@playwright/test';

export class myAccountPage {

    readonly page: Page;
    readonly sidePannel: Locator;
    readonly pageTitle: Locator;
    readonly emailField: Locator;

    constructor(page: Page) {

        this.sidePannel = page.locator('.side-2');
        this.pageTitle = page.locator('.page-title');
        this.emailField = page.locator('#Email');

    }

}