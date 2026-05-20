import { expect, test } from '@playwright/test';

import { profile } from './fixtures/test-data';

test.describe('404 page', () => {
  test('unknown route shows not found content', async ({ page }) => {
    await page.goto('/this-route-does-not-exist');

    await expect(page.getByRole('heading', { name: 'ROUTE CORRUPTED' })).toBeVisible();
    await expect(page.getByText(/Target coordinates do not map/i)).toBeVisible();
  });

  test('Go home link navigates back to the home page', async ({ page }) => {
    await page.goto('/missing-page');
    await page.getByRole('link', { name: /Reboot to home/i }).click();

    await expect(page).toHaveURL('/');
    await expect(page.getByRole('heading', { name: 'Skills in action' })).toBeVisible();
  });
});

test.describe('Footer', () => {
  test('shows copyright and location on the home page', async ({ page }) => {
    await page.goto('/');

    const footer = page.locator('app-footer');
    await expect(footer.getByText(new RegExp(profile.name))).toBeVisible();
    await expect(footer.getByText('Built with Angular 21')).toBeVisible();
    await expect(footer.getByText(profile.location)).toBeVisible();
  });
});
