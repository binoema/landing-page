import { expect, test } from '@playwright/test';

import { profile } from './fixtures/test-data';

test.describe('Skill detail pages', () => {
  for (const skill of profile.skills) {
    test(`${skill.name} page shows content sections`, async ({ page }) => {
      await page.goto(`/skills/${skill.slug}`);

      await expect(page.getByRole('heading', { level: 1, name: skill.name })).toBeVisible();
      await expect(page.getByText(skill.tagline)).toBeVisible();
      await expect(page.getByText(skill.description)).toBeVisible();
      await expect(page.getByRole('heading', { name: 'Highlights' })).toBeVisible();
      await expect(page.getByRole('heading', { name: 'Technologies' })).toBeVisible();
      await expect(page.getByRole('heading', { name: 'Live demo area' })).toBeVisible();

      for (const highlight of skill.highlights) {
        await expect(page.getByRole('heading', { level: 3, name: highlight.title })).toBeVisible();
      }

      for (const tech of skill.technologies) {
        await expect(page.getByText(tech, { exact: true })).toBeVisible();
      }
    });
  }

  test('skill card navigates from home', async ({ page }) => {
    await page.goto('/');
    await page.locator('app-skill-card').filter({ hasText: 'Node.js' }).click();
    await expect(page).toHaveURL(/\/skills\/nodejs$/);
    await expect(page.getByRole('heading', { level: 1, name: 'Node.js' })).toBeVisible();
  });

  test('back to home link returns to the home page', async ({ page }) => {
    await page.goto('/skills/angular');
    await page.getByRole('link', { name: /Back to home/i }).click();
    await expect(page).toHaveURL('/');
  });

  test('explore other skills links navigate between skills', async ({ page }) => {
    await page.goto('/skills/angular');

    const otherSkills = page
      .locator('section')
      .filter({ has: page.getByRole('heading', { name: 'Explore other skills' }) });
    await otherSkills.getByRole('link', { name: 'TypeScript' }).click();
    await expect(page).toHaveURL(/\/skills\/typescript$/);
  });

  test('unknown skill slug shows not found state', async ({ page }) => {
    await page.goto('/skills/does-not-exist');
    await expect(page.getByRole('heading', { name: 'Skill not found' })).toBeVisible();
    await page.getByRole('link', { name: 'Return home' }).click();
    await expect(page).toHaveURL('/');
  });
});
