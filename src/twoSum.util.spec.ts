export function twoSum(
  array: number[],
  target: number,
): { numberOne: number; numberTwo: number } {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return { numberOne: array[i], numberTwo: array[j] };
      }
    }
  }
  // Lanzar un error si no se encuentra ningún par
  throw new Error('Two numbers not found');
}
