/* ==========================================================================
   Sample Redux Actions
   ========================================================================== */
import * as types from './action.types';

export function click(bool) {
    return {
        type: types.CLICK,
        bool
    }
}