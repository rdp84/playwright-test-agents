import { expect, test } from "@fixtures/fixtures";

test.describe("Login page", () => {
    test("user can successfully land on login page", async ({ loginPage }) => {
        await expect(loginPage.page).toHaveTitle("Test App");
        await expect(loginPage.heading).toHaveText("Login");
    });

    test("user can login and land on the dashboard", async ({ loginPage }) => {
        await loginPage.email.enterValidEmail();
        await loginPage.password.enterValidPassword();
        await loginPage.loginButton.click();

        await expect(loginPage.page.getByTestId("heading")).toHaveText("Dashboard");
    });
});
