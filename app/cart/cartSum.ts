export function cartSum(subTotal: number, newValue: number) {
  if (typeof subTotal !== 'number' || typeof newValue !== 'number') {
    throw new Error('Pass only numbers!');
  }
  return subTotal + newValue;
}
