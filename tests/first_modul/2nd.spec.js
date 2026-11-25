import { test, expect } from '@playwright/test';


// TC_02 - 4 Star Hotels or Property rating (low to high)
test('TC_02 - Search 4 Star Hotels in Mumbai or Property rating (low to high)', async ({ page }) => {

    await page.goto('https://www.booking.com/');
    await page.waitForTimeout(3000);
    await page.locator('//button[@class="de576f5064 b46cd7aad7 e26a59bb37 c295306d66 c7a901b0e7 daf5d4cb1c e7f2b1a356"]').click();

    await page.locator('//input[@name="ss"]').fill('Mumbai');

    await page.locator('//button[@data-testid="searchbox-dates-container"]').click();
    await page.locator('//td[@aria-label="Sunday, November 15, 2026"]').click();
    await page.locator('//td[@aria-label="Wednesday, November 18, 2026"]').click();

    await page.locator('//button[@data-testid="occupancy-config"]').click();
    await page.locator("//button[normalize-space()='Done']").click();

    await page.locator('//button[@type="submit"]').click();
    await page.waitForTimeout(3000);

    if (await page.locator('//button[@data-selected-sorter="popularity"]').isVisible()) {
        await page.locator('//button[@data-selected-sorter="popularity"]').click();
        await page.locator('//button[@aria-label="Property rating (low to high)"]').click();
        await expect(page.locator('//div[@data-testid="property-card"]').first()).toBeVisible();
    }
    else {
        await page.locator("//a[contains(@href,'nflt=class%3D4')]").click();
        await page.locator("//a[contains(@href,'nflt=class%3D4')]").press("Enter");
    }

    await page.waitForTimeout(2000);

});

