/* ==========================================================================
   Application Entry Point
   ========================================================================== */
import angular from 'angular';
import ngRedux from 'ng-redux';
import reducers from './reducers';
import TestController from './components/test/test.controller';
import createLogger from 'redux-logger';

const logger = createLogger({ collapsed: true })

angular
    .module('app', [ngRedux])
    .config( ($ngReduxProvider) => { $ngReduxProvider.createStoreWith(reducers, [logger]); })
    .controller('testctrl', TestController);
