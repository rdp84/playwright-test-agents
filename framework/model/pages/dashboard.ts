import type { Locator, Page } from "@playwright/test";
import { BasePage } from "./base";

export class DashboardPage extends BasePage {
    readonly heading: Locator;
    readonly openModalButton: Locator;
    readonly loadDataButton: Locator;

    constructor(page: Page) {
        super(page, "");
        this.heading = page.getByTestId("heading");
        this.openModalButton = page.getByTestId("open-modal");
        this.loadDataButton = page.getByTestId("load-data");
    }
}
