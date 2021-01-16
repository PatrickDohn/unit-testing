const sum = require('./sum')

// test takes 2 arguments first is a string explaining what the test should do and second is a function running the test
// expect is a built in Jest function where you call you tested file and toBe is the expected output of function.
test('adds two numbers', () => {
    expect(sum(1, 2)).toBe(3)
})

test('two plus two', () => {
    expect(sum(2, 2)).toBeGreaterThan(3);
    expect(sum(2, 2)).toBeGreaterThanOrEqual(3.5);
    expect(sum(2, 2)).toBeLessThan(5);
    expect(sum(2, 2)).toBeLessThanOrEqual(4.5);

    // toBe and toEqual are equivalent for numbers
    expect(sum(2, 2)).toBe(4);
    expect(sum(2, 2)).toEqual(4);
  });
