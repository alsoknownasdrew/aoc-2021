import { countIncreases, slidingWindowsSums } from './day1'

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

describe('part 2', () => {
  it('should count three-measurements sliding window increases', () => {
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

    const expected = ([
      607,
      618,
      618,
      617,
      647,
      716,
      769,
      792
    ])

    expect(slidingWindowsSums(input)).toStrictEqual(expected)
  })
})
