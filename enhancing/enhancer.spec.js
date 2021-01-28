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
            enhancement: 20,
            durability: 0
        };
    });

    it("exists", () => {
        expect(item).toBeDefined();
    });
    it("items have a name property", () => {
        expect(item).toHaveProperty("name", "Iron Sword");
        expect(item.name).toBe("Iron Sword");
    });
    it("items have an enhancement property", () => {
        expect(item).toHaveProperty("enhancement", 20);
    });
    it("items have a durability property", () => {
        expect(item).toHaveProperty("durability", 0);
    });
    it("there is a repair method", () => {
        expect(enhancer.repair).toBeDefined();
    });
    it("the repair method returns the item with 100 durability", () => {
        expect(item.durability).toBe(0);
        enhancer.repair(item);
        expect(item.durability).toBe(100);
    });
    it("there is a success method", () => {
        expect(enhancer.success).toBeDefined();
    });
    it("enhancement sucess is handled correctly", () => {
        expect(item.enhancement).toBe(20);
        enhancer.success(item);
        expect(item.enhancement).toBe(20);
    });
    it("there is a failure method", () => {
        expect(enhancer.fail).toBeDefined();
    });
    it("enhancement failure is handled correctly", () => {
        expect(item.enhancement).toBe(20);
        enhancer.fail(item);
        expect(item.enhancement).toBe(19);
        item.enhancement = 15;
        item.durability = 80;
        expect(item.enhancement).toBe(15);
        enhancer.fail(item);
        expect(item.durability).toBe(70);
        item.enhancement = 14;
        expect(item.enhancement).toBe(14);
        enhancer.fail(item);
        expect(item.durability).toBe(65);
    });
    it("there is a get method", () => {
        expect(enhancer.get).toBeDefined();
    });
    it("gets the item name properly", () => {
        expect(item.name).toBe("Iron Sword");
        enhancer.get(item);
        expect(item.name).toBe(`+[${item.enhancement}] Iron Sword`);
    });
});