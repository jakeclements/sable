/* ==========================================================================
   Test Module
   ========================================================================== */
import angular from 'angular';
import TestController from './test.controller';
import TestService from '../../actions/sample.actions.js';

angular.module('test', [])
    .controller('testctrl', TestController)
    .service('testService', ['$http', TestService]);
