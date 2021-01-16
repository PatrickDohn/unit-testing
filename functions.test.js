const functions = require('./functions')


test('add two numbers',  () => {
    expect(functions.add(2, 2)).toBe(4)
})

test('add two numbers',  () => {
    expect(functions.add(2, 2)).not.toBe(5)
})


test('null to be null', () => {
    expect(functions.isNull()).toBeNull()
})

test('should be falsey', () => {
    expect(functions.checkValue(undefined)).toBeFalsy()
})


test('user should be Patrick Dohn object', () => {
    expect(functions.createUser()).toEqual({
        firstName: 'Patrick',
        lastName: 'Dohn'
    })
})

// less than

test('should be under 1600', () => {
    const load1 = 800
    const load2 = 700
    const load3 = 900
    expect(load1 + load2).toBeLessThan(1600)
    expect(load1 + load3).not.toBeLessThan(1600)
})
