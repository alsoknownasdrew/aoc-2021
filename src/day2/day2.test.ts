import { commandFromString } from './day2'

describe('convert string to command', () => {
  it('should convert forward command', () => {
    expect(commandFromString('forward 2')).toStrictEqual({
      direction: 'forward',
      distance: 2
    })
  })

  it('should convert down command', () => {
    expect(commandFromString('down 8')).toStrictEqual({
      direction: 'down',
      distance: 8
    })
  })
})
