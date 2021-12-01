import { countIncreases } from './day1'

describe('part 1', () => {
  test('should count increases', () => {
    const input = [
      199,
      200,
      208,
      210,
      200,
      207,
      240,
      269,
      260,
      263
    ]

    expect(countIncreases(input)).toStrictEqual(7)
  })

  test('should return 0 when there are no increases', () => {
    const input = [
      8,
      2,
      1
    ]

    expect(countIncreases(input)).toStrictEqual(0)
  })
})
