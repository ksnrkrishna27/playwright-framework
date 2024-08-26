import { Page } from "@playwright/test";
import { pageLocators } from "./locators";

export default class HomePage {
  constructor(private page: Page) {}

  async serviceTitleVisibility() {
    await this.page
      .locator(pageLocators.serviceTitle_loc)
      .waitFor({ state: "attached" });

    const titleVisible = await this.page
      .locator(pageLocators.serviceTitle_loc)
      .isVisible();
    console.log(`Service Title Visibility : ${titleVisible}`);

    return titleVisible;
  }
}
