/* ==========================================================================
   Sample Redux Actions
   ========================================================================== */
import * as types from './action.types';

export function requestUser() {
    return {
        type: types.REQUEST_USER
    }
}

export function requestUserSuccess(user) {
    return {
        type: types.REQUEST_USER_SUCCESS,
        user
    }
}

export function requestUserFailure(message) {
    return {
        type: types.REQUEST_USER_FAILURE,
        message
    }
}

export default function userService($http) {

    function click(bool) {
        return {
            type: types.CLICK,
            bool
        }
    }

    // Dispatches get action
    function getUser() {
        return dispatch => {
            dispatch(requestUser());
            return $http.get(`https://jsonplaceholder.typicode.com/users`)
                .then(response => response.data)
                .then(json => dispatch(requestUserSuccess(json)))
        }
    }

    return {
        getUser,
        click
    }

}
