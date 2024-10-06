import { Page } from "@playwright/test";

export interface commonUtils {
  page: Page;
}

async function verifyElementVisibility(element: string) {
  await this.page.locator(element).waitFor({ state: "attached" });
  const visibility = await this.page.locator(element).isVisible();
  return visibility;
}
