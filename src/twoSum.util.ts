export function twoSum(
  array: number[],
  target: number,
): [number, number] | null {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return [array[i], array[j]];
      }
    }
  }
  return null;
}
