/**
 * App Wrapping Module
 */
import angular from 'angular';
import { AppComponent } from './app.component';
import Components from '../../components';

const AppModule = angular
    .module('app.page', [
        Components
    ])
    .component('app', AppComponent)
    .name;

export default AppModule
