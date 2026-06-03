import { LoginPage } from "@model/pages/login";
import type { Page, TestFixture } from "@playwright/test";

export const loginPage: TestFixture<LoginPage, { page: Page }> = async (
    { page },
    use,
) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await use(loginPage);
};
