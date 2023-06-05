import { expect, test } from '@jest/globals';
import { cardSum } from '../../app/card/cardSum';

test('Testing sum function', () => {
  expect(cardSum(5, 3)).toBe(8);
  expect(cardSum(0, 7)).toBe(7);
  expect(cardSum(0, 0)).toBe(0);
});

test('Throws an error', () => {
  // @ts-expect-error testing incorrect arguments
  expect(() => cardSum(1, '1')).toThrow('Pass only numbers!');
  // @ts-expect-error testing incorrect arguments
  expect(() => cardSum('asd', '1')).toThrow('Pass only numbers!');
  // @ts-expect-error testing incorrect arguments
  expect(() => cardSum(1, false)).toThrow('Pass only numbers!');
});
