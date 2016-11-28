/* ==========================================================================
   Reducer Manifest
   ========================================================================== */
import { router } from 'redux-ui-router';
import { combineReducers } from 'redux';
import card from './cards';
import appState from './app-state';

export default combineReducers({
    appState,
    card,
    router
})
