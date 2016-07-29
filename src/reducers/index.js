/* ==========================================================================
   Reducer Manifest
   ========================================================================== */
import { router } from 'redux-ui-router';
import { combineReducers } from 'redux';
import sample from './sample.reducer';

export default combineReducers({
    sample,
    router
})
