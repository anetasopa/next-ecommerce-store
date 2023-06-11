import { expect, test } from '@playwright/test';

test('cart test', async ({ page }) => {
  await page.goto('http://localhost:3000/products/1');

  await page.getByTestId('product-add-to-cart').click();
  await expect(page.getByTestId('cart-count').getByText('1')).toBeVisible();

  await page.getByTestId('product-quantity').click();
  await page.getByTestId('product-quantity').fill('3');
  await page.getByTestId('product-add-to-cart').click();
  await expect(page.getByTestId('cart-count').getByText('4')).toBeVisible();

  await page.goto('http://localhost:3000/cart');

  // Expect 1 cart items
  await expect(
    page
      .locator('[data-test-id^="cart-product-"]')
      .filter({
        has: page.locator('[data-test-id^="cart-product-quantity-"]'),
      })
      .filter({
        has: page.locator('[data-test-id^="cart-product-remove-"]'),
      }),
  ).toHaveCount(1);

  await expect(page.getByTestId('cart-count')).toContainText('4');
});
