import { expect, test } from "@playwright/test";
import LoginPage from "../../pages/LoginPage";
import HomePage from "../../pages/HomePage";

test.describe("Salesforce Login Functionality", () => {
  let loginpage: LoginPage;
  let homepage: HomePage;

  test("Testing Login Functionality", async ({ page }) => {
    loginpage = new LoginPage(page);
    homepage = new HomePage(page);

    await test.step("Login with Credentials and validate service Title", async () => {
      await loginpage.login(process.env.userid!, process.env.password!);

      const titleVisibility = await homepage.serviceTitleVisibility();
      expect(titleVisibility).toBeTruthy();
    });
  });
});
