/* ==========================================================================
   Application Entry Point
   ========================================================================== */
import angular from 'angular';
import ngRedux from 'ng-redux';
import thunk from 'redux-thunk';
import uiRouter from 'angular-ui-router';
import ngReduxUiRouter from 'redux-ui-router';
import reducers from './reducers';
import createLogger from 'redux-logger';
import App from './pages/app';

import './styles/styles';

// Setup Redux Middleware
const logger = createLogger({ collapsed: true });

// Provide the application initial state (from server, localstorage, etc..)
const initalState = {};

angular
    .module('app', [
        App,
        ngRedux,
        uiRouter,
        ngReduxUiRouter
    ])
    .config( ($urlRouterProvider, $stateProvider, $locationProvider) => {

        // HTML5 Mode
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });

        // Default Route
        $urlRouterProvider.otherwise('/');

    })
    .config( $ngReduxProvider => {

        // Setup Redux Store
        $ngReduxProvider.createStoreWith(reducers, ['ngUiRouterMiddleware', thunk, logger], [], initalState);

    })
    .run($urlRouter => {

        // Sync up the UIRouter on load
        $urlRouter.sync();
        $urlRouter.listen();

    })
