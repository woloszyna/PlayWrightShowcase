import { expect, Locator, Page } from '@playwright/test';

export class alertPage {
    readonly page: Page;
    readonly triggerAlert: Locator;
    readonly triggerConfirmation: Locator;
    readonly triggerPrompt: Locator;
    readonly alertCount: Locator;

    constructor(page: Page) {
        this.page = page;
        this.triggerAlert = page.getByRole('button', {name: 'Trigger an Alert'});
        this.triggerConfirmation = page.getByRole('button', {name: 'Trigger a Confirmation'});
        this.triggerPrompt = page.getByRole('button', { name: 'Trigger a Prompt' });
        this.alertCount = page.locator('#alert-count');
    }

    async clickTriggerAlert() {
        await this.triggerAlert.click();
    }

    async clickTriggerConfirmation() {
        await this.triggerConfirmation.click();
    }

    async clickTriggerPrompt() {
        await this.triggerPrompt.click();
    }
}