import BasePage from "../base.page.js";
import { ValidBusinessBasedCountries } from "../../utils/types/AccountCreation.types.js";

class UkNationPage extends BasePage {
  get Url() {
    return "/create-account/uk-nation";
  }

  get Title() {
    return "UK Nation";
  }

  get TitleWelsh() {
    return "Cenedl yn y Deyrnas Unedig";
  }

  get H1HeaderWelsh() {
    return "Eich gwlad yn y Deyrnas Unedig";
  }

  async SelectWhereBusinessBased(ukNation: ValidBusinessBasedCountries) {
    await (await $(`label*=${ukNation}`)).click();
  }
}

export default new UkNationPage();
