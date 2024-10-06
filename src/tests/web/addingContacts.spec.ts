import test from "@playwright/test";
import LoginPage from "../../pages/LoginPage";
import { pageLocators } from "../../pages/locators";

test.describe("Salesforce Contacts Functionality", () => {
  let loginpage: LoginPage;
  test("Adding New Contacts", async ({ page }) => {
    loginpage = new LoginPage(page);
    await test.step("Adding Contacts and Verifying", async () => {
      await loginpage.login();
      await page
        .locator(pageLocators.contactsList_Xpath)
        .click({ delay: 5000 });
      await page
        .locator(pageLocators.newContact_Xpath)
        .click({ timeout: 10000 });
    });
  });
});
