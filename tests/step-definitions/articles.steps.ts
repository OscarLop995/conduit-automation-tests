import { expect } from "@playwright/test";
import { Given, When, Then } from "@cucumber/cucumber";
import { ArticlesPage } from "../pages/ArticlesPage";
import { LoginPage } from "../pages/LoginPage";
import { CustomWorld } from "../support/world";

let articlesPage: ArticlesPage;

Given('the user is logged in', async function (this: CustomWorld) {
    await expect(this.page).toHaveURL('http://localhost:3001/?feed=feed');
});

When('the user creates a new article with valid details', async function (this: CustomWorld) {
    articlesPage = new ArticlesPage(this.page);
    await articlesPage.navigateToNewArticle();
    await expect(this.page).toHaveURL('http://localhost:3001/editor');
    const { artTitle } = await articlesPage.fillArticleDetails();
    this.lastArticleTitle = artTitle;
    await expect(this.page.getByRole('button', { name: 'Publish Article' })).toBeEnabled();
    await articlesPage.submitArticle();
});

Then('the article should be successfully created and displayed', async function (this: CustomWorld) {
    await expect(this.page.getByRole('heading', { name: this.lastArticleTitle })).toBeVisible();
});