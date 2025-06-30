import test from "@playwright/test";
import LoginPage from "../../pages/LoginPage";
import { pageLocators } from "../../pages/locators";
import ContactsPage from "../../pages/ContactsPage";

test.describe("Salesforce Contacts Functionality", () => {
  let loginpage: LoginPage;
  let contactpage: ContactsPage;
  test("Adding New Contacts", async ({ page }) => {
    loginpage = new LoginPage(page);
    contactpage = new ContactsPage(page);
    await test.step("Adding Contacts and Verifying", async () => {
      await loginpage.login();
      await contactpage.clickOperation(`contactsList`);

      await contactpage.clickOperation(`newContact`);
    });
  });
});
