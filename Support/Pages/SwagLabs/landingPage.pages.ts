import { expect, Locator, Page } from '@playwright/test';
require('dotenv').config();

export class landingPage {
    readonly page: Page;
    readonly loginFld: Locator;
    readonly password: Locator;
    readonly loginBtn: Locator;
    readonly errorBtn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.loginFld = page.locator('#user-name');
        this.password = page.locator('#password');
        this.loginBtn = page.locator('#login-button');
        this.errorBtn = page.locator('#login_button_container > div > form > div.error-message-container.error > h3');
    }

    async goTo() {
        await this.page.goto(process.env.SWAGLABS);
    }

    async incorrectLogin() {
        await this.loginFld.type('incorrect_user');
        await this.password.type(process.env.SWAGLABS_PASSWORD);
        await this.loginBtn.click();
    }

    async incorrectPassword() {
        await this.loginFld.type(process.env.STDUSER);
        await this.password.type('incorrectPassword');
        await this.loginBtn.click();
    }

    async correctLoginSTDUSER() {
        await this.loginFld.type(process.env.STDUSER);
        await this.password.type(process.env.SWAGLABS_PASSWORD);
        await this.loginBtn.click();
    }

    async correctLoginLOCKEDUSR() {
        await this.loginFld.type(process.env.LOCKEDUSR);
        await this.password.type(process.env.SWAGLABS_PASSWORD);
        await this.loginBtn.click();
    }

    async correctLoginPROBLEMUSR() {
        await this.loginFld.type(process.env.PROBLEMUSR);
        await this.password.type(process.env.SWAGLABS_PASSWORD);
        await this.loginBtn.click();
    }

    async correctLoginPERFGLITUSR() {
        await this.loginFld.type(process.env.PERFGLITUSR);
        await this.password.type(process.env.SWAGLABS_PASSWORD);
        await this.loginBtn.click();
    }
}