import { Page } from "@playwright/test";
import { pageLocators } from "./locators";
import { decryption } from "../utils/CryptojsUtil";

export default class LoginPage {
  page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  async login() {
    await this.page.goto("/");
    await this.page
      .locator(pageLocators.usernameInput_loc)
      .fill(decryption(process.env.userid!));
    await this.page
      .locator(pageLocators.passwordInput_loc)
      .fill(decryption(process.env.password!));
    await this.page
      .locator(pageLocators.loginButton_loc)
      .click()
      .catch((error) => {
        console.error(`Error after clicking on Login Button : ${error}`);
        throw error;
      });
  }
}
