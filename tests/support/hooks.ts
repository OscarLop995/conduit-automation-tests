import { Before, After, setDefaultTimeout } from "@cucumber/cucumber";
import { CustomWorld } from "./world";
import { LoginPage } from "../pages/LoginPage";
import { loadCredentials } from "../utils/credentialsManager";

setDefaultTimeout(60000);

Before(async function (this: CustomWorld) {
  await this.openBrowser();
});

Before({ tags: "@requiresLogin" }, async function (this: CustomWorld) {
  const { email, password } = loadCredentials();
  const loginPage = new LoginPage(this.page);
  await loginPage.navigateToLogin();
  await loginPage.enterUserCredentials(email, password);
  await loginPage.submitLoginForm();
});

After(async function (this: CustomWorld) {
  await this.closeBrowser();
});