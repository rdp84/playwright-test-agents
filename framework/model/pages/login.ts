import { Email } from "@model/components/identity/email";
import { Password } from "@model/components/identity/password";
import type { Locator, Page } from "@playwright/test";
import { BasePage } from "./base";

export class LoginPage extends BasePage {
    readonly heading: Locator;
    readonly loginButton: Locator;
    readonly email: Email;
    readonly password: Password;

    constructor(page: Page) {
        super(page, "");
        this.heading = page.getByTestId("heading");
        this.loginButton = page.getByTestId("login-btn");
        this.email = new Email(page);
        this.password = new Password(page);
    }
}
