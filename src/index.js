/* ==========================================================================
   Application Entry Point
   ========================================================================== */
import angular from 'angular';
import ngRedux from 'ng-redux';
import thunk from 'redux-thunk';
import uiRouter from 'angular-ui-router';
import reducers from './reducers';
import createLogger from 'redux-logger';

import './components';

// Setup Redux Middleware
const logger = createLogger({ collapsed: true });

// Provide the application initial state (from server, localstorage, etc..)
const initalState = {};

angular
    .module('app', [uiRouter, ngRedux, 'components'])
    .config( ($ngReduxProvider) => {
        $ngReduxProvider.createStoreWith(reducers, [thunk, logger], [], initalState);
    })

