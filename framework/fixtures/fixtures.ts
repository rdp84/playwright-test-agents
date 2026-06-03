import type { LoginPage } from "@model/pages/login";
import { test as base } from "@playwright/test";
import { loginPage } from "./login";

type Fixtures = {
    loginPage: LoginPage;
};

export const test = base.extend<Fixtures>({
    loginPage,
});
export { expect } from "@playwright/test";
