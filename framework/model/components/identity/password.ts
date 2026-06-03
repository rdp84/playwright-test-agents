import type { Locator, Page } from "@playwright/test";

export class Password {
    private readonly validPassword: string;
    private readonly input: Locator;

    constructor(page: Page) {
        this.validPassword = process.env.PASSWORD || "";
        this.input = page.getByTestId("password");
    }

    getValidPassword(): string {
        return this.validPassword;
    }

    async enterValidPassword(): Promise<void> {
        await this.input.fill(this.validPassword);
    }
}
