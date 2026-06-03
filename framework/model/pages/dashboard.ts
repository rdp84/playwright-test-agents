import type { Locator, Page } from "@playwright/test";
import { BasePage } from "./base";

export class DashboardPage extends BasePage {
    readonly heading: Locator;

    constructor(page: Page) {
        super(page, "");
        this.heading = page.getByTestId("heading");
    }
}
