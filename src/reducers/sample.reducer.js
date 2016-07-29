/* ==========================================================================
   Sample Redux Reducer
   ========================================================================== */
import * as types from '../actions/action.types';

const initialState = {
    clicked: false
}

export default function sample(state = initialState, action) {
    switch (action.type) {
        case types.CLICK: {
            return Object.assign({}, state, {
                clicked: action.bool
            });
        }
        case types.REQUEST_USER: {
            return Object.assign({}, state, {
                user: 'fetching'
            });
        }
        case types.REQUEST_USER_SUCCESS: {
            return Object.assign({}, state, {
                user: action.user
            });
        }
        case types.REQUEST_USER_FAILURE: {
            return Object.assign({}, state, {
                user: action.message
            });
        }
        default: {
            return state
        }
    }
}
