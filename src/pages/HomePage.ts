import { Page } from "@playwright/test";
import { pageLocators } from "./locators";
import CommonUtils from "../utils/CommonUtils";

export default class HomePage {
  page: Page;
  commonUtils: CommonUtils;
  constructor(page: Page) {
    this.page = page;
    this.commonUtils = new CommonUtils(page);
  }

  async serviceTitleVisibility() {
    await this.page
      .locator(pageLocators.serviceTitle_loc)
      .waitFor({ state: "attached" });

    const titleVisible = await this.commonUtils.verifyElementVisibility(
      pageLocators.serviceTitle_loc
    );
    console.log(`Service Title Visibility : ${titleVisible}`);

    return titleVisible;
  }
}
