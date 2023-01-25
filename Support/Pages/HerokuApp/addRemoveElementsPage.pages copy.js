const { expect } = require('@playwright/test');
exports.addRemoveElementsPage = class addRemoveElementsPage {
    
    /**
   * @param {import('@playwright/test').Page} page
   */
    
    constructor(page) {
        this.page = page;
        this.heading = page.getByRole('heading');
        this.addElementBtn = page.getByRole('button', { name: 'Add Element' });
        this.deleteBtn = page.getByRole('button', { name: 'Delete' });
        this.removeElements = page.locator('.added-manually');
        
    }

    async addElement() {
        await this.addElementBtn.click();
    }

    async deleteElement() {
        await this.deleteBtn.click();
    }

    async addFiveElements() {
        await this.addElementBtn.click();
        await this.addElementBtn.click();
        await this.addElementBtn.click();
        await this.addElementBtn.click();
        await this.addElementBtn.click();
    }
}