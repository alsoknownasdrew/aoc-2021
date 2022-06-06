import assert from 'assert'

interface Command {
  direction: 'forward' | 'down' | 'up'
  distance: number
}

export const commandFromString = (string: string): Command => {
  const [direction, distance] = string.split(' ')

  assert(['forward', 'down', 'up'].includes(direction))

  return {
    direction,
    distance
  }
}
