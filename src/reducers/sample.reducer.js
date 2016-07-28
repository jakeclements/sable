/* ==========================================================================
   Sample Redux Reducer
   ========================================================================== */
import * as types from '../actions/action.types';

const initialState = {
    clicked: false
}

export default function sampleReducer(state = initialState, action) {
    switch (action.type) {
        case types.CLICK:
            const newState = {
                clicked: action.bool
            }
            return newState;
        default:
            return state
    }
}
