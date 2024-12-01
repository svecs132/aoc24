const { input } = require('../utils')

function run(src: string): number {
    return src.split('\n')
        .filter(line => line.length > 0)
        .map(line => line.split(' '))
        .map(strs => strs.filter(str => str.length > 0))
        .map(strs => strs.assert(strs => strs.length === 2))
        .map(([a, b]) => [parseInt(a), parseInt(b)])
        .reduce(([arr1, arr2], [val1, val2]) => [arr1.concat(val1), arr2.concat(val2)], [[], []])
        .pipe(([l, r]) => l.map(val => r.filter(x => x === val).length * val).reduce((acc, val) => acc + val, 0))
}

console.log(run(await input()))
