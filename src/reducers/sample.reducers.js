/* ==========================================================================
   Sample Redux Reducer
   ========================================================================== */
import * as types from '../actions/action.types';

export default function sampleReducer(state = {}, action) {
    switch (action.type) {
        case types.CLICK:
            state.clicked = action.bool
            return state;
        default:
            return state
    }
}
