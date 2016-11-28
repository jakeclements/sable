/* ==========================================================================
   Redux functionality for Cards
   ---
   Included are cart types, actions and reducer
   ========================================================================== */
const types = {
    FETCH_CARD: 'FETCH_CARD',
    FETCH_CARD_INIT: 'FETCH_CARD_INIT',
    FETCH_CARD_SUCCESS: 'FETCH_CARD_SUCCESS',
    FETCH_CARD_FAIL: 'FETCH_CARD_FAIL'
};

const initialState = {}

export function cardService($http) {

    /**
     * Private Methods
     */
    const getCardInit = function() {
        return {
            type: types.FETCH_CARD_INIT
        }
    }

    const getCardSuccess = function(cardData) {
        return {
            type: types.FETCH_CARD_SUCCESS,
            cardData
        }
    }

    const getCardFailure = function(cardData) {
        return {
            type: types.FETCH_CARD_SUCCESS,
            cardData
        }
    }

    /**
     * Public Methods
     */
    const getRandomStarWarsChar = function(providedCardId = false, wookie = false) {

        // Will be overwritten with an ID
        let cardId;

        // Number between 0 and 88, not choosing something that has been chosen before.
        const randomNumBetweenFirstAndLast = Math.floor(Math.random() * 88) + 1;

        // If there's a cardId provided to us, use that,
        // otherwise get random
        if (providedCardId) {
            cardId = providedCardId;
        } else {
            cardId = randomNumBetweenFirstAndLast;
        }

        // The Base API Url
        let APIUrl = `http://swapi.co/api/people/${cardId}`;

        // Should we wookie-ize the response?
        if (wookie) {
            APIUrl = `${APIUrl}?format=wookiee`
        }

        return dispatch => {

            /**
             * Notify the app that we've begun loading a card
             */
            dispatch(getCardInit());

            return $http.get(APIUrl)
                .then(res => res.data)
                .then(data => dispatch(getCardSuccess(data)))
                .catch(err => dispatch(getCardFailure(err)));
        }
    }

    return {
        getRandomStarWarsChar: getRandomStarWarsChar
    }
}

export default function cardReducer(state = initialState, action) {
    switch (action.type) {
        case types.FETCH_CARD: {
            return state
        }
        case types.FETCH_CARD_SUCCESS: {
            if (action.cardData.url) {
                return Object.assign({}, action.cardData, {id: action.cardData.url.match(/[0-9]+/)[0]});
            } else if (action.cardData.hurcan) {
                return Object.assign({}, action.cardData, {
                    id: action.cardData.hurcan.match(/[0-9]+/)[0],
                    name: action.cardData.whrascwo
                });
            }
            return state
        }
        case types.FETCH_CARD_FAIL: {
            return state
        }
        default: {
            return state
        }
    }
}
