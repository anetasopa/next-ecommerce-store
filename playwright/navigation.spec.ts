import { expect, test } from '@playwright/test';

test('navigation test', async ({ page }) => {
  // Open webpage
  await page.goto('http://localhost:3000/');

  // Expect a h1
  await expect(
    page.getByRole('heading', { name: 'Enjoy Your Moment With Coffee.' }),
  ).toBeVisible();

  // Expect a Logo Name
  await expect(page.getByRole('link', { name: 'Cofeez' })).toBeVisible();

  // Expect a Home Page
  await expect(page.getByRole('link', { name: 'Home' })).toBeVisible();

  // Expect a Products Page
  await expect(page.getByRole('link', { name: 'Products' })).toBeVisible();

  // Expect a Button AboutUs
  // await expect(page.getByRole('link', { name: 'About Us' })).toBeVisible();

  // Expect a Button Products and go to products
  await page.getByRole('link', { name: 'Go To Product' }).click();
  await expect(page).toHaveURL('http://localhost:3000/products');

  // Expect 12 imgs of the products
  await expect(page.locator('[data-test-id^="product-"] >> img')).toHaveCount(
    12,
  );

  // Click on the first product
  await page
    .getByTestId('product-13')
    .getByRole('link', { name: 'Fantasia Blend' })
    .click();
  await expect(page).toHaveURL('http://localhost:3000/products/13');

  // Expect an image
  await expect(page.getByRole('img', { name: 'productName' })).toBeVisible();

  // Expect a h3
  await expect(
    page.getByRole('heading', { name: 'Fantasia Blend' }),
  ).toBeVisible();

  // Expect a type
  await expect(page.getByText('bean', { exact: true }).first()).toBeVisible();

  // Expect a text1
  await expect(
    page.getByText(
      'Immerse yourself in a fantastical journey with this whimsical blend.',
    ),
  ).toBeVisible();

  // Expect a text2
  await expect(
    page.getByText(
      'Discover a harmonious combination of smooth flavors, dancing with hints of choco',
    ),
  ).toBeVisible();

  // // Expect a text3
  await expect(
    page.getByText('Creating a truly magical coffee experience.'),
  ).toBeVisible();

  // Expect a price
  await expect(
    page.getByTestId('product-price').getByText('45 EUR'),
  ).toBeVisible();

  // Expect an input
  await expect(page.getByTestId('product-quantity')).toBeVisible();

  // Expect a button
  await expect(page.getByTestId('product-add-to-cart')).toBeVisible();

  // // Expect a h3
  // await expect(
  //   page.getByRole('heading', { name: 'You may also like' }),
  // ).toBeVisible();

  // Click on link "shopping cart"
  await page.getByTestId('cart-link').click();
  await expect(page).toHaveURL('http://localhost:3000/card');

  // Expect a sum
  await page.getByTestId('cart-total').getByText('45');

  // Expect a button checkout
  await page.getByTestId('cart-checkout').click();
  await expect(page).toHaveURL('http://localhost:3000/checkout');

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

  // // Expect a checkout Button
  await expect(page.getByTestId('checkout-confirm-order')).toBeVisible();
  await page.getByTestId('checkout-confirm-order').click();
  await expect(page).toHaveURL('http://localhost:3000/thank');
});
