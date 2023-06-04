import { expect, test } from '@playwright/test';

test('checkout test', async ({ page }) => {
  await page.goto('http://localhost:3000/checkout');

  // Check checkout form
  await expect(page.getByTestId('checkout-first-name')).toBeVisible();
  await page.getByTestId('checkout-first-name').fill('first name');

  await expect(page.getByTestId('checkout-last-name')).toBeVisible();
  await page.getByTestId('checkout-last-name').fill('last name');

  await expect(page.getByTestId('checkout-email')).toBeVisible();
  await page.getByTestId('checkout-email').fill('email');

  await expect(page.getByTestId('checkout-address')).toBeVisible();
  await page.getByTestId('checkout-address').fill('address');

  await expect(page.getByTestId('checkout-city')).toBeVisible();
  await page.getByTestId('checkout-city').fill('city');

  await expect(page.getByTestId('checkout-postal-code')).toBeVisible();
  await page.getByTestId('checkout-postal-code').fill('postal');

  await expect(page.getByTestId('checkout-country')).toBeVisible();
  await page.getByTestId('checkout-country').fill('country');

  await expect(page.getByTestId('checkout-credit-card')).toBeVisible();
  await page.getByTestId('checkout-credit-card').fill('credit');

  await expect(page.getByTestId('checkout-expiration-date')).toBeVisible();
  await page.getByTestId('checkout-expiration-date').fill('date');

  await expect(page.getByTestId('checkout-security-code')).toBeVisible();
  await page.getByTestId('checkout-security-code').fill('code');

  await expect(page.getByTestId('checkout-confirm-order')).not.toBeDisabled();

  // Expect a checkout Button
  await expect(page.getByTestId('checkout-confirm-order')).toBeVisible();
  await page.getByTestId('checkout-confirm-order').click();
  await expect(page).toHaveURL('http://localhost:3000/thank');
});
