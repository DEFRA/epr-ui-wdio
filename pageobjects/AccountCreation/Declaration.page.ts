import BasePage from "../base.page.js";

class DeclaratonPage extends BasePage {

    get Url() {
        return "/create-account/declaration"
    }

    get Title() {
        return "Declaration"
    }

    get TitleWelsh() {
        return "Datganiad"
    }

    get H1HeaderWelsh() {
        return "Datganiad"
    }

    
    
    private get btnConfirmAndCreate() {
        return $("button*=Confirm details and create account")
    }
    
    async ConfirmDetailsandCreateAccount() {
        return (await this.btnConfirmAndCreate).click();
    }
}

export default new DeclaratonPage()
