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
    const load4 = 800
    expect(load1 + load2).toBeLessThan(1600)
    expect(load1 + load3).not.toBeLessThan(1600)
    expect(load1 + load4).toBeLessThanOrEqual(1600)
})


// regex

test('there is no I in team', () => {
    expect('team').not.toMatch(/I/i)
})

// async data

// Promise
// test('should return user Leanna Graham', () => {
//     expect.assertions(1)
//     return functions.fetchUser()
//     .then(data => {
//         expect(data.name).toEqual('Leanne Graham')
//     })
// })

// Await
test('should return user Leanna Graham', async () => {
    expect.assertions(1)
    const data = await functions.fetchUser()
    expect(data.name).toEqual('Leanne Graham')
})
