import { DashboardPage } from "@model/pages/dashboard";
import type { Page, TestFixture } from "@playwright/test";

export const dashboardPage: TestFixture<DashboardPage, { page: Page }> = async (
    { page },
    use,
) => {
    const dashboardPage = new DashboardPage(page);
    await use(dashboardPage);
};
