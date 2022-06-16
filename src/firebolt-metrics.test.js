import { fireBoltMediaStartContent } from './firebolt-metrics';

describe("fireBoltMediaStartContent", () => {
    it("Should dispatch 'Metrics.startContent(entityId)' and return the pageId ", () => {
        const result = fireBoltMediaStartContent('1234');
        expect(result).toEqual('1234');
    })
})