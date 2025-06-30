import { Page } from "@playwright/test";
import { pageLocators } from "./locators";
import CommonUtils from "../utils/CommonUtils";

export default class ContactsPage {
  page: Page;
  commonUtils: CommonUtils;
  constructor(page: Page) {
    this.page = page;
    this.commonUtils = new CommonUtils(page);
  }

  async clickOperation(name: string) {
    const locator = {
      contactsList: pageLocators.contactsList_Xpath,
      newContact: pageLocators.newContact_Xpath,
    };
    await this.commonUtils.verifyElementVisibility(locator[name]);
    await this.page.locator(locator[name]).click();
  }
}
