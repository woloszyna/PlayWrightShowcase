import { expect, Locator, Page } from '@playwright/test';

export class checkOut {

    readonly page: Page;
    readonly registerBtn: Locator;
    readonly await: Algorithm;

    constructor(page: Page) {
        this.registerBtn = page.getByRole('button', { name: 'Register' });
    }

    async accessRegisterPage() {
        this.registerBtn.click();
    }
}