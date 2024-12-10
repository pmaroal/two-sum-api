export function twoSum(
  array: number[],
  target: number,
): { numberOne: number; numberTwo: number } | null {
  const tolerance = 1e-10; // little tolerance to avoid floating point errors

  if (array.length === 0) {
    throw new Error('Two numbers not found');
  }
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (Math.abs(array[i] + array[j] - target) < tolerance) {
        return { numberOne: array[i], numberTwo: array[j] };
      }
    }
  }
  throw new Error('Two numbers not found'); //    throw new HttpException('Two numbers not found', HttpStatus.NOT_FOUND);
}
