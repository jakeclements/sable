/**
 * Components Module
 */
import angular from 'angular';
import HeaderComponent from './header';

const Components = angular
    .module('components', [
        HeaderComponent
    ])
    .name;

export default Components
