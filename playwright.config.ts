import { defineConfig, devices } from '@playwright/test';

/**
 * E2E tests run against the production build profile so assertions use
 * public data from `profile.data.ts` (no local private overrides).
 */
export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: !!process.env['CI'],
  retries: process.env['CI'] ? 2 : 0,
  workers: process.env['CI'] ? 1 : undefined,
  reporter: process.env['CI'] ? [['github'], ['html', { open: 'never' }]] : 'html',
  use: {
    /* Port 4201 avoids clashing with `ng serve` (4200) and private profile data */
    baseURL: process.env['PLAYWRIGHT_TEST_BASE_URL'] ?? 'http://localhost:4201',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  webServer: {
    command: 'npx ng build --configuration production && npx ng serve --configuration production --port 4201',
    url: 'http://localhost:4201',
    reuseExistingServer: false,
    timeout: 180_000,
  },
});
