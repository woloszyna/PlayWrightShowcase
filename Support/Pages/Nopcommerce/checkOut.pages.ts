import { expect, Locator, Page } from '@playwright/test';
import { registerPage } from './registerPage.pages';

export class checkOut {

    readonly page: Page;
    readonly registerBtn: Locator;
    readonly emailField: Locator;
    readonly passwordField: Locator;
    readonly loginBtn: Locator;
    readonly emAddrVal: string;
    readonly pwdVal: string;


    constructor(page: Page) {
        const regPage = new registerPage(page);
        this.registerBtn = page.getByRole('button', { name: 'Register' });
        this.emailField = page.locator('.email');
        this.passwordField = page.locator('.password');
        this.loginBtn = page.getByRole('button', { name: 'Log in' });
        this.emAddrVal = regPage.emailAddressValue;
        this.pwdVal = regPage.passwordValue;

    }

    async accessRegisterPage() {
        this.registerBtn.click();
    }

    async logInProvideEmail() {
        this.emailField.fill(this.emAddrVal);
    }

    async logInProvidePasword() {
        this.passwordField.fill(this.pwdVal);
    }

    async clickLogIn() {
        this.loginBtn.click();
    }
}