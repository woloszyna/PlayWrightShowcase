import { expect, Locator, Page } from '@playwright/test';
require('dotenv').config();

export class landingPage {
    readonly url: string;
    readonly page: Page;
    readonly alertBtn: Locator;
    readonly APIBtn: Locator;
    readonly CanvasBtn: Locator;
    readonly CookieBtn: Locator;
    readonly dragAndDropBtn: Locator;
    readonly filePickerBtn: Locator;
    readonly iFrameBtn: Locator;
    readonly linksBtn: Locator;
    readonly notificationBtn: Locator;
    readonly selectBtn: Locator;
    readonly tableBtn: Locator;    

    constructor(page: Page) {
        this.url = process.env.KITCHEN_URL;
        this.page = page;
        this.alertBtn = page.getByText('Alert');
        this.APIBtn = page.getByText('API');
        this.CanvasBtn = page.getByText('Canvas');
        this.CookieBtn = page.getByText('Cookie');
        this.dragAndDropBtn = page.getByText('Drag & Drop');
        this.filePickerBtn = page.getByText('File Picker');
        this.iFrameBtn = page.getByText('iFrame');
        this.linksBtn = page.getByText('Links');
        this.notificationBtn = page.getByText('Notification');
        this.selectBtn = page.getByText('Select');
        this.tableBtn = page.getByText('Table');
    }
    async goTo() {
        await this.page.goto(this.url);
    }

    async accessAlert() {
        await this.alertBtn.click();
    }
}