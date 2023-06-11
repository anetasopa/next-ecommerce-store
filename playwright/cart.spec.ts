import { expect, test } from '@playwright/test';

test('cart test', async ({ page }) => {
  test.setTimeout(20000);

  await page.goto('http://localhost:3000/products/13');

  await page.getByTestId('product-add-to-cart').click();
  await page.waitForTimeout(3000);

  await page.goto('http://localhost:3000/card');

  await expect(await page.getByTestId('cart-count')).toContainText('1');
  await page.getByRole('button', { name: 'Remove' }).click();
  await expect(page.getByTestId('cart-count')).toContainText('0');
});
