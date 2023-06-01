import { expect, test } from '@jest/globals';
import { sum } from '../../app/card/Sum';

test('Testing total sum', () => {
  const subTotal = 10;
  const newValue = 5;

  const result = sum(subTotal, newValue);

  expect(result).toBe(15);
});
