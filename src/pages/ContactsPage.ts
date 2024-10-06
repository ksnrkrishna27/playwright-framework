import { Page } from "@playwright/test";
import { pageLocators } from "./locators";

export default class ContactsPage {
  page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  async clickOperation(name: string) {
    const locator = {
      contactsList: pageLocators.contactsList_Xpath,
      newContact: pageLocators.newContact_Xpath,
    };

    await this.page.locator(locator[name]).;
  }
}
