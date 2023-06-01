import { expect, test } from '@jest/globals';
import { sum } from '../../app/card/Sum';

test('Testing sum function', () => {
  expect(sum(5, 3)).toBe(8);
  expect(sum(0, 7)).toBe(7);
  expect(sum(10, -5)).toBe(5);
  expect(sum(0, 0)).toBe(0);
});

test('Throws an error', () => {
  // @ts-expect-error testing incorrect arguments
  expect(() => sum(1, '1')).toThrow('Pass only numbers!');
  // @ts-expect-error testing incorrect arguments
  expect(() => sum('asd', '1')).toThrow('Pass only numbers!');
  // @ts-expect-error testing incorrect arguments
  expect(() => sum(1, false)).toThrow('Pass only numbers!');
});
