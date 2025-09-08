import { expect } from "@playwright/test";
import { Given, When, Then } from "@cucumber/cucumber";
import { RegisterPage } from "../pages/RegisterPage";
import { CustomWorld } from "../support/world";
import { saveCredentials, loadCredentials } from "../utils/credentialsManager";

let registerPage: RegisterPage;

Given('the user is trying to register with valid info', async function (this: CustomWorld) {
    registerPage = new RegisterPage(this.page);
    const{username, email, password} = await registerPage.fillSignUpCredentials();
    this.username = username;
    this.email = email;
    this.password = password;
    saveCredentials({username, email, password});
    await expect(this.page).toHaveURL('http://localhost:3001/register');
});

When('the user submits the registration form', async function (this: CustomWorld) {
    await expect(this.page.getByTestId('btn-submit')).toBeEnabled();
    await registerPage.submitRegistrationForm();
});

Then('the user should be redirected to the homepage', async function (this: CustomWorld) {
    await expect(this.page).toHaveURL('http://localhost:3001/?feed=feed');
});

Then('should be able to see their username displayed', async function (this: CustomWorld) {
    await expect(this.page.getByRole('link', { name: this.username })).toBeVisible();
});

Given('the user is trying to register with an existing username', async function (this: CustomWorld) {
    registerPage = new RegisterPage(this.page);
    const { email, password } = loadCredentials();
    await registerPage.fillSignUpCredentials('New User', email, password);
});

Then('the user should see an error message indicating the username is already taken', async function (this: CustomWorld) {
    await expect(this.page.getByText('Register fail')).toBeVisible();
});