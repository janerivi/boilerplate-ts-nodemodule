import { expect } from 'chai';
import { addAndB } from '../src/index';

describe('addAndB function', () => {
    it('should return 3 when adding 1 and 2', () => {
        expect(addAndB(1, 2)).to.equal(3);
    });

    it('should return 0 when adding -1 and 1', () => {
        expect(addAndB(-1, 1)).to.equal(0);
    });
});