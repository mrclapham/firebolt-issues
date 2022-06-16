import calc from './calc';

describe('calc', () => {
    it("Should add up", () => {
        const result = calc(3, 4);
        expect(result).toEqual(7)
    })
})
