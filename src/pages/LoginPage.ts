import { Page } from "@playwright/test";
import { pageLocators } from "./locators";

export default class LoginPage {
  constructor(private page: Page) {}

  async login(username: string, password: string) {
    await this.page.goto("/");
    await this.page.locator(pageLocators.usernameInput_loc).fill(username);
    await this.page.locator(pageLocators.passwordInput_loc).fill(password);
    await this.page
      .locator(pageLocators.loginButton_loc)
      .click()
      .catch((error) => {
        console.error(`Error after clicking on Login Button : ${error}`);
        throw error;
      });
  }
}
