/**
 * Components Module
 */
import angular from 'angular';
import HeaderComponent from './header';
import ToggleSwitchComponent from './toggle-switch';
import CardComponent from './card';

const Components = angular
    .module('components', [
        HeaderComponent,
        ToggleSwitchComponent,
        CardComponent
    ])
    .name;

export default Components
