import { expect, test } from '@playwright/test';

test('checkout test', async ({ page }) => {
  await page.goto('http://localhost:3000/checkout');

  // Check checkout form
  await page.getByTestId('checkout-first-name').fill('first name');
  await page.getByTestId('checkout-last-name').fill('last name');
  await page.getByTestId('checkout-email').fill('email@email.at');
  await page.getByTestId('checkout-address').fill('address');
  await page.getByTestId('checkout-city').fill('city');
  await page.getByTestId('checkout-postal-code').fill('postal');
  await page.getByTestId('checkout-country').fill('country');
  await page.getByTestId('checkout-credit-card').fill('credit');
  await page.getByTestId('checkout-expiration-date').fill('date');
  await page.getByTestId('checkout-security-code').fill('code');

  await expect(page.getByTestId('checkout-confirm-order')).not.toBeDisabled();

  // Expect a checkout Button
  await expect(page.getByTestId('checkout-confirm-order')).toBeVisible();
  await page.getByTestId('checkout-confirm-order').click();
  await expect(page).toHaveURL('http://localhost:3000/thank');
});
