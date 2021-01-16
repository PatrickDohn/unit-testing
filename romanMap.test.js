const intToRoman = require('./romanMap')


test('Outputs III',  () => {
    expect(intToRoman(3)).toBe('III')
})

test('Output IV', () => {
    expect(intToRoman(4)).toBe('IV')
})
