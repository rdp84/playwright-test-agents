import path from "node:path";
import { defineConfig, devices } from "@playwright/test";
import dotenv from "dotenv";

dotenv.config({
	path: path.resolve(__dirname, ".env"),
	override: false,
	quiet: true,
});

export default defineConfig({
	testDir: "./tests",
	testMatch: "**/*.spec.ts",
	testIgnore: ["tests/seed.spec.ts"],
	fullyParallel: true,
	forbidOnly: !!process.env.CI,
	retries: 0,
	reporter: [["html", { open: "never" }], ["list"]],
	use: {
		baseURL: process.env.APP_URL || "http://localhost:5173",
		trace: "retain-on-failure",
		screenshot: {
			mode: "only-on-failure",
			fullPage: true,
		},
		testIdAttribute: "data-test-id",
	},

	projects: [
		{
			name: "desktop-chromium",
			use: { ...devices["Desktop Chrome"] },
		},
	],
});
