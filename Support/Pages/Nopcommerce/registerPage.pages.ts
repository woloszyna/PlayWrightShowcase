import { expect, Locator, Page } from '@playwright/test';

export class registerPage {
    readonly page: Page;
    readonly regModal: Locator;
    readonly gender: Locator;
    readonly firstName: Locator
    readonly lastName: Locator;
    readonly DOBDay: Locator;
    readonly DOBMonth: Locator;
    readonly DOBYear: Locator;
    readonly emailAddress: Locator;
    readonly companyName: Locator;
    readonly newsletter: Locator;
    readonly password: Locator;
    readonly confirmPassword: Locator;
    readonly regBtn: Locator;
    
    constructor(page: Page) {
        this.regModal = page.locator('.registration-page');
        this.gender = page.locator('#gender-male');
        this.firstName = page.locator('#FirstName');
        this.lastName = page.locator('#LastName');
        this.DOBDay = page.locator('body > div.master-wrapper-page > div.master-wrapper-content > div > div > div > div.page-body > form > div:nth-child(1) > div.form-fields > div.inputs.date-of-birth > div > select:nth-child(1)');
        this.DOBMonth = page.locator('body > div.master-wrapper-page > div.master-wrapper-content > div > div > div > div.page-body > form > div:nth-child(1) > div.form-fields > div.inputs.date-of-birth > div > select:nth-child(2)');
        this.DOBYear = page.locator('body > div.master-wrapper-page > div.master-wrapper-content > div > div > div > div.page-body > form > div:nth-child(1) > div.form-fields > div.inputs.date-of-birth > div > select:nth-child(3)');
        this.emailAddress = page.locator('#Email');
        this.companyName = page.locator('#Company');
        this.newsletter = page.locator('#Newsletter');
        this.password = page.locator('#Password');
        this.confirmPassword = page.locator('#ConfirmPassword');
        this.regBtn = page.getByRole('button', { name: 'Register' });
        
    }


    async provideMaleGender() {
        this.gender.check();
    }

    async provideMaleFirstName() {
        this.firstName.fill('Tester');
    }

    async provideMaleLastName() {
        this.lastName.fill('McTest');
    }

    async provideMaleDOB() {
        this.DOBDay.selectOption('1');
        this.DOBMonth.selectOption('1');
        this.DOBYear.selectOption('1984');
    }

    async provideMaleEmailAddress() {
        const date = ((new Date()).getTime() & 0xffff);
        const emailAddress = date + '@gmail.com';

        this.emailAddress.fill(emailAddress);
    }

    async provideMaleCompanyName() {
        this.companyName.fill('TestCompany');
    }

    async uncheckNewsletter() {
        this.newsletter.uncheck();
    }

    async provideMalePassword() {
        this.password.fill('password123');
    }

    async provideMalePasswordConfirmatiom() {
        this.confirmPassword.fill('password123');
    }

    async clickRegButton() {
        this.regBtn.click();
    }

}