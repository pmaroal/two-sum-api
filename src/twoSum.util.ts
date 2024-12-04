export function twoSum(
  array: number[],
  target: number,
): { numberOne: number; numberTwo: number } | null {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return { numberOne: array[i], numberTwo: array[j] };
      }
    }
  }
  return null;
}
