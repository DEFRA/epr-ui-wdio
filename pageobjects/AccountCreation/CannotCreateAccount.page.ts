import BasePage from "../base.page.js";

class CannotCreateAccount extends BasePage {

    get Url() {
        return "/create-account/cannot-create-account"
    }

    get Title() {
        return "Cannot create account"
    }

    get TitleWelsh() {
        return "Methu creu cyfrif"
    }

    get H1HeaderWelsh() {
        return "Rhaid ichi gael cyfarwyddwr, ysgrifennydd cwmni, partner neu aelod i greu cyfrif"
    }
}

export default new CannotCreateAccount()
