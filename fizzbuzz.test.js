const fizzbuzz = require('./fizzbuzz')


test('num mod 3 to return fizz', () => {
    expect(fizzbuzz(3)).toEqual([0, 1, 2, 'fizz'])
})

test('num mod 5 to return buzz', () => {
    expect(fizzbuzz(5)).toEqual([0, 1, 2, 'fizz', 4, 'buzz'])
})
test('num mod 15 to return fizzbuzz', () => {
    expect(fizzbuzz(15)).toEqual([
        0,
        1,
        2,
        'fizz',
        4,
        'buzz',
        'fizz',
        7,
        8,
        'fizz',
        'buzz',
        11,
        'fizz',
        13,
        14,
        'fizzbuzz'])
})
