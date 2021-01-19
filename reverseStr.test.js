const reverseStr = require('./reverseStr')

test('reverse exists', () => {
    expect(reverseStr).toBeDefined()
})

test('string reverses', () => {
    expect(reverseStr('hello')).toEqual('olleh')
})
