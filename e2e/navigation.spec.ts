import { expect, test } from '@playwright/test';

import { profile, skillSlugs } from './fixtures/test-data';

test.describe('Header navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('shows profile branding in the header', async ({ page }) => {
    const header = page.locator('app-header');
    await expect(header.getByText(profile.name)).toBeVisible();
    await expect(header.getByText('Portfolio')).toBeVisible();
    await expect(header.getByText(profile.avatarInitials)).toBeVisible();
  });

  test('desktop nav links route to home and each skill', async ({ page }) => {
    const mainNav = page.getByRole('navigation', { name: 'Main' });

    await mainNav.getByRole('link', { name: 'Home' }).click();
    await expect(page).toHaveURL('/');

    for (const slug of skillSlugs) {
      const skill = profile.skills.find((s) => s.id === slug)!;
      await mainNav.getByRole('link', { name: skill.name }).click();
      await expect(page).toHaveURL(new RegExp(`/skills/${slug}$`));
      await expect(page.getByRole('heading', { level: 1, name: skill.name })).toBeVisible();
    }
  });

  test('logo link returns to home from a skill page', async ({ page }) => {
    await page.goto('/skills/angular');
    await page.locator('app-header').getByRole('link').first().click();
    await expect(page).toHaveURL('/');
    await expect(page.getByRole('heading', { name: 'Skills in action' })).toBeVisible();
  });
});

test.describe('Mobile navigation', () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test('toggle menu opens links to skill pages', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('button', { name: 'Toggle menu' }).click();

    const mobileNav = page.getByRole('navigation', { name: 'Mobile' });
    await expect(mobileNav).toBeVisible();

    await mobileNav.getByRole('link', { name: 'TypeScript' }).click();
    await expect(page).toHaveURL(/\/skills\/typescript$/);
    await expect(page.getByRole('heading', { level: 1, name: 'TypeScript' })).toBeVisible();
  });
});
