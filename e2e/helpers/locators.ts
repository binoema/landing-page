import { type Page } from '@playwright/test';

export function heroSection(page: Page) {
  return page.getByRole('main').locator('section').first();
}

export function technologiesSection(page: Page) {
  return page.locator('section').filter({ has: page.getByRole('heading', { name: 'Technologies' }) });
}
