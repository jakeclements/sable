/* ==========================================================================
   Redux functionality for Cards
   ---
   Included are cart types, actions and reducer
   ========================================================================== */
const types = {
    TOGGLE_DIFFICULTY: 'TOGGLE_DIFFICULTY'
};

const initialState = {
    difficulty: 'normal'
}

export function appStateService(cardsService) {


    /**
     * Private Methods
     */

    const toggleDifficultySwitch = function() {
        return {
            type: types.TOGGLE_DIFFICULTY
        }
    }

    /**
     * Public Methods
     */
    const toggleDifficulty = function(cardId = false, wookie = false) {
        return dispatch => {

            // Update the switch status regardless of a working API response
            dispatch(toggleDifficultySwitch())
            dispatch(cardsService.getRandomStarWarsChar(cardId, wookie))
        }
    }

    return {
        toggleDifficulty: toggleDifficulty
    }
}

export default function appStateReducer(state = initialState, action) {
    switch (action.type) {
        case types.TOGGLE_DIFFICULTY: {
            state.difficulty === 'normal' ? state.difficulty = 'wookie' : state.difficulty = 'normal';
            return Object.assign({}, state);
        }
        default: {
            return state
        }
    }
}
