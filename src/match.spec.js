const { sum, dif } = require('./math.js')

test("Deve somar 5 + 3", () => {
    expect(sum(5, 3)).toBe(8);
});

test("Deve subtrarir 5 - 3", () => {
    expect(dif(5, 3)).toBe(2);
});