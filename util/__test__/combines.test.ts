import { expect, test } from '@jest/globals';
import { combines } from '../../app/card/combines';

test('Test combines products with quantities from the cookie items', () => {
  const products = [
    {
      id: 1,
      name: 'Fantasia Blend',
      text1:
        'Immerse yourself in a fantastical journey with this whimsical blend.',
      text2:
        'Discover a harmonious combination of smooth flavors, dancing with hints of chocolate and caramel.',
      text3: 'Creating a truly magical coffee experience.',

      type: 'bean',
      price: 45,
    },
  ];

  const productsInCookie = [{ id: 1, quantity: 2 }];

  const expectedOutput = [
    {
      id: 1,
      quantity: 2,
      name: 'Fantasia Blend',
      text1:
        'Immerse yourself in a fantastical journey with this whimsical blend.',
      text2:
        'Discover a harmonious combination of smooth flavors, dancing with hints of chocolate and caramel.',
      text3: 'Creating a truly magical coffee experience.',

      type: 'bean',
      price: 45,
    },
  ];

  const result = combines(products, productsInCookie);

  expect(result).toEqual(expectedOutput);
});
