import { twoSum } from './twoSum.util';

describe('twoSum function', () => {
  it('should return indices of the two numbers that sum to the target', () => {
    const array = [2, 7, 11, 15];
    const target = 9;
    const result = twoSum(array, target);
    expect(result).toEqual({ numberOne: 2, numberTwo: 7 });
  });

  it('should return the first valid pair if multiple pairs exist', () => {
    const array = [1, 3, 2, 4];
    const target = 6;
    const result = twoSum(array, target);
    expect(result).toEqual({ numberOne: 2, numberTwo: 4 });
  });

  it('should throw an error if no two numbers sum to the target', () => {
    const array = [1, 2, 3];
    const target = 7;
    expect(() => twoSum(array, target)).toThrow('Two numbers not found');
  });

  it('should throw an error if the array is empty', () => {
    const array: number[] = [];
    const target = 5;
    expect(() => twoSum(array, target)).toThrow('Two numbers not found');
  });

  it('should handle negative numbers correctly', () => {
    const array = [-3, 4, 3, 90];
    const target = 0;
    const result = twoSum(array, target);
    expect(result).toEqual({ numberOne: -3, numberTwo: 3 });
  });
  it('should handle large numbers correctly', () => {
    const array = [1000000000, 1000000001, 1000000002, 1000000003];
    const target = 2000000005;
    const result = twoSum(array, target);
    expect(result).toEqual({ numberOne: 1000000002, numberTwo: 1000000003 });
  });
  it('should handle arrays with duplicate numbers correctly', () => {
    const array = [1, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const target = 9;
    const result = twoSum(array, target);
    expect(result).toEqual({ numberOne: 1, numberTwo: 8 });
  });
  it('should handle chosen any number if are repeated', () => {
    const array = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2];
    const target = 4;
    const result = twoSum(array, target);
    expect(result).toEqual({ numberOne: 2, numberTwo: 2 });
  });
});
