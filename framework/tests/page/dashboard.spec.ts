// spec: tests/test_plan.md
// seed: tests/seed.spec.ts

import { expect, test } from "@fixtures/fixtures";
import { DashboardPage } from "@model/pages/dashboard";

test.describe("Dashboard Functionality", () => {
    test("Dashboard Loads After Successful Login", async ({ page, loginPage }) => {
        // 1. Perform login with email "user@example.com" and password "password123"
        await loginPage.email.fill("user@example.com");
        await loginPage.password.fill("password123");
        await loginPage.loginButton.click();

        // 2. Wait for page to load
        const dashboardPage = new DashboardPage(page);

        // 3. Verify dashboard content is displayed
        // - Dashboard page title remains "Test App"
        await expect(page).toHaveTitle("Test App");

        // - Dashboard heading displays "Dashboard"
        await expect(dashboardPage.heading).toHaveText("Dashboard");

        // - Page contains "Open Modal" button
        await expect(dashboardPage.openModalButton).toBeVisible();

        // - Page contains "Load Data" button
        await expect(dashboardPage.loadDataButton).toBeVisible();
    });
});
