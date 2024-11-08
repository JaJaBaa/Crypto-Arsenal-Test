import { test, expect } from "@playwright/test";

test.describe("/count page", () => {
  test("should increment the counter by 5 each time the button is clicked", async ({
    page,
  }) => {
    // Navigate to the /count page
    await page.goto("http://localhost:3000/count"); // Adjust URL if your app is running on a different port

    // Initial count check
    const counter = await page.locator("text=Count: 0");
    await expect(counter).toBeVisible();

    // Click the increment button and check if the counter updates by 5
    const incrementButton = page.locator('button:has-text("+5")');

    // Click the button once and wait to see the counter increment gradually to 5
    await incrementButton.click();
    await page.waitForTimeout(2500); // Waiting for the counter to reach 5 (500ms * 5 increments)
    await expect(page.locator("text=Count: 5")).toBeVisible();

    // Click the button again and wait for it to reach 10
    await incrementButton.click();
    await page.waitForTimeout(2500); // Waiting for the counter to reach 10
    await expect(page.locator("text=Count: 10")).toBeVisible();
  });
});
