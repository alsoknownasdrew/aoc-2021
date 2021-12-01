import fs from 'fs'
import path from 'path'
import { countIncreases } from './day1'

const measurements = fs.readFileSync(path.join(__dirname, 'data/input.txt'), 'utf8').split('\n').map(el => parseInt(el))

console.log('Part one:', countIncreases(measurements))
