import { twoSum } from './twoSum.util';

describe('twoSum function', () => {
  it('should return indices of the two numbers that sum to the target', () => {
    const array = [2, 7, 11, 15];
    const target = 9;
    const result = twoSum(array, target);
    expect(result).toEqual({ numberOne: 2, numberTwo: 7 });
  });
});
