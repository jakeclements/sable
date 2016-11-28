/**
 * Header Module
 */
import angular from 'angular';
import HeaderComponent from './header.component';

const HeaderModule = angular
    .module('header', [])
    .component('headerComponent', HeaderComponent)
    .name;

export default HeaderModule
