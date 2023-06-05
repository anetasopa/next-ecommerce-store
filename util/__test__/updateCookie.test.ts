import { expect, test } from '@jest/globals';
import { updateQuantity } from '../../app/products/[productId]/updateQuantity';

test('Test updating quantity when there are no product in the cart for this product. In other words adding new product.', () => {
  const result = updateQuantity(null, 1, 3);
  console.log(result);

  expect(result).toStrictEqual('[{"id":1,"quantity":3}]');
});

test('Test updating quantity when there are products already in the cart.', () => {
  let cookie = '[{"id":15,"quantity":6},{"id":24,"quantity":1}]';
  cookie = updateQuantity(cookie, 15, 300);
  cookie = updateQuantity(cookie, 24, 30);
  cookie = updateQuantity(cookie, 240, 10);
  cookie = updateQuantity(cookie, 240, -10);
  cookie = updateQuantity(cookie, 240, 10);

  expect(cookie).toStrictEqual(
    '[{"id":15,"quantity":306},{"id":24,"quantity":31},{"id":240,"quantity":10}]',
  );
});
