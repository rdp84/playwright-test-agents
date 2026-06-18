import type { Locator, Page } from "@playwright/test";

export class Email {
	private readonly validEmail: string;
	private readonly input: Locator;

	constructor(page: Page) {
		this.validEmail = process.env.EMAIL || "";
		this.input = page.getByTestId("email");
	}

	getValidEmail(): string {
		return this.validEmail;
	}

	async enterValidEmail(): Promise<void> {
		await this.input.fill(this.validEmail);
	}

	async fill(email: string): Promise<void> {
		await this.input.fill(email);
	}
}
