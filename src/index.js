/* ==========================================================================
   Application Entry Point
   ========================================================================== */
import angular from 'angular';
import ngRedux from 'ng-redux';
import { combineReducers } from 'redux';

angular
    .module('app', [ngRedux])
    .config( ($ngReduxProvider) => {
        let reducer = combineReducers(/* Imported Reducers object */);
        $ngReduxProvider.createStoreWith(reducer, ['promiseMiddleware']);
    });
