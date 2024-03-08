class SecurePageForContactPage {
    constructor(page){
        this.page = page;
    }
    get flashMessage(){
        return this.page.locator('.form__message')
    }
}
module.exports = SecurePageForContactPage;