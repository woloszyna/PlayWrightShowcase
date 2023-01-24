const { expect } = require('@playwright/test');

exports.landingPage = class landingPage {

    
    /**
   * @param {import('@playwright/test').Page} page
   */
    
    constructor(page) {
        this.page = page;
        this.ABTesting = page.getByRole('link', {name: 'A/B Testing'});
        this.addRemoveElements = page.getByRole('link', { name: 'Add/Remove Elements' });
        this.basicAuth = page.getByRole('link', {name: 'Basic Auth'});
        this.brokenImages = page.getByRole('link', {name: 'Broken Images'});
        this.chalengingDOM = page.getByRole('link', {name: 'Challenging DOM'});
        this.checkBoxes = page.getByRole('link', {name: 'Checkboxes'});
        this.contextMenu = page.getByRole('link', {name: 'Context Menu'});
        this.digestAuthentication = page.getByRole('link', {name: 'Digest Authentication'});
        this.disappearingElements = page.getByRole('link', {name: 'Disappearing Elements'});
        this.dragAndDrop = page.getByRole('link', {name: 'Drag and Drop'});
        this.dropdown = page.getByRole('link', {name: 'Dropdown'});
        this.dynamicContent = page.getByRole('link', {name: 'Dynamic Content'});
        this.dynamicControls = page.getByRole('link', {name: 'Dynamic Controls'});
        this.dynamicLoading = page.getByRole('link', {name: 'Dynamic Loading'});
        this.entryAd = page.getByRole('link', {name: 'Entry Ad'});
        this.exitIntent = page.getByRole('link', {name: 'Exit Intent'});
        this.fileDownload = page.getByRole('link', {name: 'File Download'});
        this.fileUpload = page.getByRole('link', {name: 'File Upload'});
        this.floatingMenu = page.getByRole('link', {name: 'Floating Menu'});
        this.forgotPassword = page.getByRole('link', {name: 'Forgot Password'});
        this.formAuthentication = page.getByRole('link', {name: 'Form Authentication'});
        this.frames = page.getByRole('link', {name: 'Frames'});
        this.geolocation = page.getByRole('link', {name: 'Geolocation'});
        this.horizontalSlider = page.getByRole('link', {name: 'Horizontal Slider'});
        this.hovers = page.getByRole('link', {name: 'Hovers'});
        this.infiniteScroll = page.getByRole('link', {name: 'Infinite Scroll'});
        this.inputs = page.getByRole('link', {name: 'Inputs'});
        this.JQueryUIMenus = page.getByRole('link', {name: 'JQuery UI Menus'});
        this.javaScriptAlerts = page.getByRole('link', {name: 'JavaScript Alerts'});
        this.javaScriptOnloadEventError = page.getByRole('link', {name: 'JavaScript onload event errorJavaScript onload event error'});
        this.keyPresses = page.getByRole('link', {name: 'Key Presses'});
        this.largeDeepDOM = page.getByRole('link', {name: 'Large & Deep DOM'});
        this.multipleWindows = page.getByRole('link', {name: 'Multiple Windows'});
        this.nestedFrames = page.getByRole('link', {name: 'Nested Frames'});
        this.notificationMessages = page.getByRole('link', {name: 'Notification Messages'});
        this.redirectLink = page.getByRole('link', {name: 'Redirect Link'});
        this.secureFileDownload = page.getByRole('link', {name: 'Secure File Download'});
        this.shadowDOM = page.getByRole('link', {name: 'Shadow DOM'});
        this.shiftingContent = page.getByRole('link', {name: 'Shifting Content'});
        this.slowResources = page.getByRole('link', {name: 'Slow Resources'});
        this.sortableDataTables = page.getByRole('link', {name: 'Sortable Data Tables'});
        this.statusCodes = page.getByRole('link', {name: 'Status Codes'});
        this.typos = page.getByRole('link', {name: 'Typos'});
        this.WYSIWYGEditor = page.getByRole('link', {name: 'WYSIWYG Editor'});
    }
    
    async goTo() {
        await this.page.goto(process.env.HEROKUAPP_URL);
    };

    async accessABTesting() {
        await this.ABTesting.click();
        //TODO: add verification
    };

    async accessAddRemoveElements() {
        await this.addRemoveElements.click();
    }

}
