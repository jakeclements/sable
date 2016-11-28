/**
 * Toggle Switch Module
 */
import angular from 'angular';
import ToggleComponent from './toggle-switch.component';

const ToggleModule = angular
    .module('toggleSwitch', [])
    .component('toggleSwitch', ToggleComponent)
    .name;

export default ToggleModule
