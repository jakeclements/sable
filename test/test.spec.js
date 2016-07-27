/* ==========================================================================
   Test Spec
   ---
   Used to test our testing framework is running as expected, pretty basic
   stuff.
   ========================================================================== */
import chai from 'chai';
import { trueOrFalse } from '../src/test';

chai.should();

const expect = chai.expect;

describe('Test Spec', () => {

    it('should pass', () => {
        expect(true).to.be.true
    })

    it('should return true if passed true', () => {
        expect(trueOrFalse(true)).to.equal.true
    })

    it.skip('should fail', () => {
        expect(false).to.be.true
    })

});
