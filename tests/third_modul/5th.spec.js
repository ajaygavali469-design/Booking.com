import { test, expect } from '@playwright/test';

// TC_06 - Trending Filter
// TC_15 - Language Filter
test('TC_15 - Activities Language Filter', async ({ page }) => {

    await page.goto('https://www.booking.com/attractions/');
    await page.waitForTimeout(3000);

    // Close notification
    if (await page.locator("//button[@aria-label='Close']").count() > 0) {
        await page.locator("//button[@aria-label='Close']").first().click();
    }

    // Search destination
    await page.locator('//input[@data-testid="search-input-field"]').fill('Agra')
    await page.locator('//input[@data-testid="search-input-field"]').press('Enter');
    await page.waitForTimeout(2000);
    await page.locator('//td[@aria-label="Sunday, November 15, 2026"]').click();
    await page.locator('//td[@aria-label="Wednesday, November 18, 2026"]').click();
    await page.locator("//button[normalize-space()='Search']").click();
    await page.waitForTimeout(5000);
    // Select Language
    await page.locator('(//input[@name="filter_by_language"])[1]').check();
    await page.waitForTimeout(1000);
});
