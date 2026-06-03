import { Email } from "@model/components/identity/email";
import { Password } from "@model/components/identity/password";
import type { Page } from "@playwright/test";
import { BasePage } from "./base";

export class LoginPage extends BasePage {
    readonly email: Email;
    readonly password: Password;

    constructor(page: Page) {
        super(page, "");
        this.email = new Email(page);
        this.password = new Password(page);
    }
}
