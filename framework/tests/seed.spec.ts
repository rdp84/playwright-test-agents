import { expect, test } from "@fixtures/fixtures";

test.describe("Login page", () => {
    test("user can successfully land on login page", async ({ loginPage }) => {
        await expect(loginPage.page).toHaveTitle("Test App");
        await expect(loginPage.heading).toHaveText("Login");
    });
});