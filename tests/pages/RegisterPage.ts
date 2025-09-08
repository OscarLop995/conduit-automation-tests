import { Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import { generateRandomUsername, generateRandomEmail } from "../utils/generateRandomData";

export class RegisterPage extends BasePage {
    private userNameInput; 
    private emailInput; 
    private psswrdInput; 

    constructor (page: Page) {
        super(page);
        this.userNameInput = page.getByTestId('input-username');
        this.emailInput = page.getByTestId('input-email');
        this.psswrdInput = page.getByTestId('input-password');
    };
    
    async fillSignUpCredentials(
        username = generateRandomUsername(),
        email = generateRandomEmail(),
        password = '123456'
    ) { 
        await this.page.goto('http://localhost:3001/');
        await this.page.getByRole('link', { name: 'Sign up' }).click();
        await this.userNameInput.fill(username);
        await this.emailInput.fill(email);
        await this.psswrdInput.fill(password);
        return {username, email, password};
    }
    
    async submitRegistrationForm() {
        await this.page.getByTestId('btn-submit').click();
    };
};