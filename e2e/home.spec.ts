import { expect, test } from '@playwright/test';

import { profile } from './fixtures/test-data';

test.describe('Home page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('shows hero with profile details', async ({ page }) => {
    await expect(page).toHaveTitle('Home');
    await expect(page.getByRole('heading', { level: 1 })).toContainText(profile.name);
    await expect(page.getByText(profile.title)).toBeVisible();
    await expect(page.getByText(profile.tagline)).toBeVisible();
    await expect(page.getByText(profile.bio)).toBeVisible();
    await expect(page.getByText(profile.avatarInitials)).toBeVisible();
  });

  test('shows skills section with a card per skill', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Skills in action' })).toBeVisible();

    for (const skill of profile.skills) {
      await expect(page.locator('app-skill-card').filter({ hasText: skill.name })).toBeVisible();
    }
  });

  test('Explore Angular navigates to the Angular skill page', async ({ page }) => {
    await page.getByRole('link', { name: 'Explore Angular' }).click();
    await expect(page).toHaveURL(/\/skills\/angular$/);
    await expect(page.getByRole('heading', { level: 1, name: 'Angular' })).toBeVisible();
  });

  test('Get in touch opens a mailto link', async ({ page }) => {
    const contact = page.getByRole('link', { name: 'Get in touch' });
    await expect(contact).toHaveAttribute('href', `mailto:${profile.email}`);
  });

  test('lists social links with correct destinations', async ({ page }) => {
    const socialNav = page.getByRole('list', { name: 'Social links' });

    for (const link of profile.socialLinks) {
      await expect(socialNav.getByRole('link', { name: link.label })).toHaveAttribute('href', link.url);
    }
  });
});
