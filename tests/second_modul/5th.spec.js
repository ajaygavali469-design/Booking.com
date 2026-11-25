import { test, expect } from '@playwright/test';

// TC_10 - Flight Times Filter
test('TC_10 - Search Flights and Apply Flight Times Filter', async ({ page }) => {

    await page.goto('https://www.booking.com/flights/index.html');
    await page.waitForTimeout(3000);

    // Close login notification
    if (await page.locator("//button[@aria-label='Close']").count() > 0) {
        await page.locator("//button[@aria-label='Close']").first().click();
    }

    // Select Round Trip
    await page.locator("//label[contains(.,'Round-trip')]").click()
    await page.waitForTimeout(1000);

    // Enter destination
    await page.locator('//button[@data-ui-name="input_location_to_segment_0"]').click();
    await page.locator('//button[@class="Actionable-module__root___LVUAN ListItem-module__root___JSzQ9 ListItem-module__root--spacing-medium___IbBGJ ListItem-module__root--interactive___gSS3W Anywhere-module__selection___Oq_r5"]').click();
    await page.waitForTimeout(2000);

    // Select dates
    await page.locator('//button[@data-ui-name="button_date_segment_0"]').click();
    await page.locator('//td[@aria-label="Saturday, December 5, 2026, Select as departure date"]').click();
    await page.locator('//td[@aria-label="Saturday, December 12, 2026, Select as return date"]').click();
    await page.waitForTimeout(1000);

    // Travellers
    await page.locator('//button[@data-ui-name="button_occupancy"]').click();
    await page.locator("//button[normalize-space()='Done']").click();
    await page.waitForTimeout(1000);

    // Search flights
    await page.locator('//button[@data-ui-name="button_search_submit"]').click();
    await page.waitForTimeout(5000);

    // Flight Times filter
    await page.locator("//button[contains(.,'Flight times')]").click();
    await page.waitForTimeout(2000);

    // Departure filter
    const departureSlider = page.locator('//*[@id="departure"]/div/div[1]/fieldset/div/input[2]');

    if (await departureSlider.isVisible()) {
        await departureSlider.evaluate((element) => {
            element.value = '12:00';
            element.dispatchEvent(new Event('input', { bubbles: true }));
            element.dispatchEvent(new Event('change', { bubbles: true }));
        });
    }
    await page.waitForTimeout(2000);

    // Arrival filter
    const arrivalSlider = page.locator('//*[@id="departure"]/div/div[2]/fieldset/div/input[2]');
    if (await arrivalSlider.isVisible()) {
        await arrivalSlider.evaluate((element) => {
            element.value = '12:00';
            element.dispatchEvent(new Event('input', { bubbles: true }));
            element.dispatchEvent(new Event('change', { bubbles: true }));
        });
    }
    await page.waitForTimeout(2000);
});
