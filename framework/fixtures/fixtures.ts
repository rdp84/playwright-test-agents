import type { DashboardPage } from "@model/pages/dashboard";
import type { LoginPage } from "@model/pages/login";
import { test as base } from "@playwright/test";
import { dashboardPage } from "./dashboard";
import { loginPage } from "./login";

type Fixtures = {
    loginPage: LoginPage;
    dashboardPage: DashboardPage;
};

export const test = base.extend<Fixtures>({
    loginPage,
    dashboardPage,
});
export { expect } from "@playwright/test";
