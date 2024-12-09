export function twoSum(
  array: number[],
  target: number,
): { numberOne: number; numberTwo: number } | null {
  if (array.length === 0) {
    throw new Error('Two numbers not found');
  }
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return { numberOne: array[i], numberTwo: array[j] };
      }
    }
  }
  throw new Error('Two numbers not found'); //    throw new HttpException('Two numbers not found', HttpStatus.NOT_FOUND);
}
