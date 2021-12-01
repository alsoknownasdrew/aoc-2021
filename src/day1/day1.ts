export const countIncreases = (numbers: number[]): number => {
  return numbers.reduce((accumulator: number, current: number, currentIndex: number, array: number[]): number => {
    return current > array[currentIndex - 1] ? ++accumulator : accumulator
  }, 0)
}
