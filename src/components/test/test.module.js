/* ==========================================================================
   Test Module
   ========================================================================== */
import angular from 'angular';
import TestController from './test.controller';

angular.module('test', [])
    .controller('testctrl', TestController);
