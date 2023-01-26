import { expect, Locator, Page } from '@playwright/test';
export class addRemoveElementsPage {
    readonly page: Page;
    readonly heading: Locator;
    readonly addElementBtn: Locator;
    readonly deleteBtn: Locator;
    readonly removeElements: Locator;

    constructor(page: Page) {
        this.page = page;
        this.heading = page.getByRole('heading');
        this.addElementBtn = page.getByRole('button', { name: 'Add Element' });
        this.deleteBtn = page.getByRole('button', { name: 'Delete' });
        this.removeElements = page.locator('.added-manually');
    };

    async addElement() {
        await this.addElementBtn.click();
    };

    async deleteElement() {
        await this.deleteBtn.click();
    };

    async addFiveElements() {
        await this.addElementBtn.click();
        await this.addElementBtn.click();
        await this.addElementBtn.click();
        await this.addElementBtn.click();
        await this.addElementBtn.click();
    };

    async removeFourElements() {
        await this.deleteBtn.nth(4).click();
        await this.deleteBtn.nth(3).click();
        await this.deleteBtn.nth(2).click();
        await this.deleteBtn.nth(1).click();
    };

    async removeFiveElements() {
        await this.deleteBtn.nth(4).click();
        await this.deleteBtn.nth(3).click();
        await this.deleteBtn.nth(2).click();
        await this.deleteBtn.nth(1).click();
        await this.deleteBtn.nth(0).click();
    }
}
