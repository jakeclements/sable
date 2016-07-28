/* ==========================================================================
   Reducer Manifest
   ========================================================================== */
import { router } from 'redux-ui-router';
import { combineReducers } from 'redux';
import sampleReducer from './sample.reducer';

export default combineReducers({
    sampleReducer,
    router
})
