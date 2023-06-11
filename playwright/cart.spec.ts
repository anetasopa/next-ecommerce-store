import { expect, test } from '@playwright/test';

test('cart test', async ({ page }) => {
  test.setTimeout(20000);
  await page.goto('http://localhost:3000/products/13');

  await expect(page.getByTestId('product-add-to-cart')).toBeVisible();

  await page.getByTestId('product-add-to-cart').click();

  await expect(page.getByTestId('cart-count')).toContainText('1');

  await page.getByTestId('product-add-to-cart').click();

  await page.goto('http://localhost:3000/card');

  await expect(page.getByRole('button', { name: 'Remove' })).toBeVisible();
  await page.getByRole('button', { name: 'Remove' }).click();
  await expect(page.getByTestId('cart-count')).toContainText('0');
});
