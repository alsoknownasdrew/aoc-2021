export const countIncreases = (numbers: number[]): number => {
  return numbers.reduce((accumulator, current, currentIndex, array): number => {
    return current > array[currentIndex - 1] ? ++accumulator : accumulator
  }, 0)
}

// TODO add size of sliding window as parameter
export const slidingWindowsSums = (numbers: number[]): number[] => {
  return numbers.map((number, currentIndex, array) => {
    const nextNumber = array[currentIndex + 1]
    const secondNextNumber = array[currentIndex + 2]
    if (nextNumber !== undefined && secondNextNumber !== undefined) {
      return number + nextNumber + secondNextNumber
    }

    return 0
  })
}
