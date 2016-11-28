/**
 * App Wrapping Module
 */
import angular from 'angular';
import { AppComponent } from './app.component';
import Components from '../../components';
import Services from '../../services';

/**
 * Pages
 */
import AboutPage from '../about';
import CardsPage from '../cards';

const AppModule = angular
    .module('app.page', [
        AboutPage,
        CardsPage,
        Components,
        Services
    ])
    .component('app', AppComponent)
    .name;

export default AppModule
