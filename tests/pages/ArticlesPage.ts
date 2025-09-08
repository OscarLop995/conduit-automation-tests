import { Page, expect } from "@playwright/test";
import { BasePage } from "./BasePage";
import { generateRandomTitle, generateRandomDescription, generateRandomBody } from "../utils/generateRandomData";

export class ArticlesPage extends BasePage {
    private articleTitleInput;
    private articleAboutInput;
    private articleBodyInput;

    constructor(page: Page) {
        super(page);
        this.articleTitleInput = page.getByRole('textbox', { name: 'Article Title' })
        this.articleAboutInput = page.getByRole('textbox', { name: "What's this article about?" })
        this.articleBodyInput = page.getByRole('textbox', { name: 'Write your article (in markdown)' })
    }
    async navigateToNewArticle() {
        await this.page.getByRole('link', { name: '  New Post' }).click();
    }

    async fillArticleDetails(
        artTitle = generateRandomTitle(),
        artDescription = generateRandomDescription(),
        artBody = generateRandomBody()
    ) {
        await this.articleTitleInput.pressSequentially(artTitle, { delay: 30 });
        await expect(this.articleTitleInput).toHaveValue(artTitle);
        await this.articleAboutInput.pressSequentially(artDescription, { delay: 5 });
        await expect(this.articleAboutInput).toHaveValue(artDescription);
        await this.articleBodyInput.pressSequentially(artBody, { delay: 5 });
        await expect(this.articleBodyInput).toHaveValue(artBody);
        return { artTitle, artDescription, artBody };
    }

    async submitArticle() {
        await this.page.getByRole('button', { name: 'Publish Article' }).click();
    }
}