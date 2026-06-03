import type { Page } from "@playwright/test";

export class BasePage {
    readonly page: Page;
    readonly path: string;

    constructor(page: Page, path: string) {
        this.page = page;
        this.path = path;
    }

    async goto() {
        await this.page.goto(this.path);
    }
}
