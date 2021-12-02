import fs from 'fs'
import path from 'path'
import { countIncreases, slidingWindowsSums } from './day1'

const measurements = fs.readFileSync(path.join(__dirname, 'data/input.txt'), 'utf8').split('\n').map(el => parseInt(el))

console.log('Part one:', countIncreases(measurements))
console.log('Part two:', countIncreases(slidingWindowsSums(measurements)))
