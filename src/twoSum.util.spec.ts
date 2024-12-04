import { twoSum } from './twoSum.util';

describe('twoSum', () => {
  it('should return the correct pair of numbers that sum to the target', () => {
    const result = twoSum([1, 2, 3, 4], 5);
    expect(result).toEqual([1, 4]);
  });

  it('should return null if no pair sums to the target', () => {
    const result = twoSum([1, 2, 3], 10);
    expect(result).toBeNull();
  });
});
