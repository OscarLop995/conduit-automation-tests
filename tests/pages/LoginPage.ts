import { Page, expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {
    private emailInput;
    private psswrdInput;
    private loginButton;

    constructor(page: Page) {
    super(page);
    this.emailInput = page.getByTestId("input-email");
    this.psswrdInput = page.getByTestId("input-password");
    this.loginButton = page.getByTestId("btn-submit");
  }
  async navigateToLogin() {
    await this.page.goto('http://localhost:3001/');
    await this.page.getByRole('link', { name: 'Sign in' }).click();
  }
  async enterUserCredentials(email: string, password: string) {
    await this.emailInput.fill(email);
    await this.psswrdInput.fill(password);
  }
    async submitLoginForm() {
    await this.loginButton.click();
    }
};