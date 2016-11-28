/**
 * Cards Page
 */
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import CardsPageComponent from './cards.component';

const AppModule = angular
    .module('cards.page', [ uiRouter ])
    .component('cardsPage', CardsPageComponent)
    .config($stateProvider => {
        $stateProvider
            .state('cards', {
                url: '/',
                component: 'cardsPage'
            });
    })
    .name;

export default AppModule
