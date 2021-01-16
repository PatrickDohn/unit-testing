const subtract = require('./subtract')

// test takes 2 arguments first is a string explaining what the test should do and second is a function running the test
// expect is a built in Jest function where you call you tested file and toBe is the expected output of function.
test('subtracts two numbers', () => {
    expect(subtract(3, 2)).toBe(1)
})
