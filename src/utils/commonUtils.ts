import { Page } from "@playwright/test";

export default class CommonUtils {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async verifyElementVisibility(element: string) {
    await this.page.locator(element).waitFor({ state: "attached" });
    const visibility = await this.page.locator(element).isVisible();
    return visibility;
  }
}
