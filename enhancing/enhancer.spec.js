const enhancer = require('./enhancer.js');

test("sanity", () => {
    expect(1 + 2).toBe(3);
    expect(3).not.toBe(4);
    expect(1).toBeLessThan(2);
});

describe("Item class", () => {
    let item = {};
    beforeEach(() => {
        item = {
            name: "Iron Sword",
            enhancement: 0,
            durability: 100
        };
    });

    it("exists", () => {
        expect(item).toBeDefined();
    });
});