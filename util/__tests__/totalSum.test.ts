import { expect, test } from '@jest/globals';
import { cartSum } from '../../app/cart/cartSum';

test('Testing sum function', () => {
  expect(cartSum(5, 3)).toBe(8);
  expect(cartSum(0, 7)).toBe(7);
  expect(cartSum(0, 0)).toBe(0);
});

test('Throws an error', () => {
  // @ts-expect-error testing incorrect arguments
  expect(() => cartSum(1, '1')).toThrow('Pass only numbers!');
  // @ts-expect-error testing incorrect arguments
  expect(() => cartSum('asd', '1')).toThrow('Pass only numbers!');
  // @ts-expect-error testing incorrect arguments
  expect(() => cartSum(1, false)).toThrow('Pass only numbers!');
});
