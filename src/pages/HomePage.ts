import { Page } from "@playwright/test";
import { pageLocators } from "./locators";
import commonUtils from "../utils/commonUtils";

export default class HomePage implements commonUtils {
  page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  async serviceTitleVisibility() {
    await this.page
      .locator(pageLocators.serviceTitle_loc)
      .waitFor({ state: "attached" });

    const titleVisible = await this.verifyElementVisibility(
      pageLocators.serviceTitle_loc
    );
    console.log(`Service Title Visibility : ${titleVisible}`);

    return titleVisible;
  }
}
