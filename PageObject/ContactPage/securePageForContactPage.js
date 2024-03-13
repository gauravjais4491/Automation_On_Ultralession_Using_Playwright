class SecurePageForContactPage {
    constructor(page){
        this.page = page;
    }
    get flashMessage(){
        return this.page.getByText('Thanks for contacting us. We\'')
    }
}
module.exports = SecurePageForContactPage;