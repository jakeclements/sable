/* ==========================================================================
   Combined Angular Services
   ========================================================================== */
import angular from 'angular';
import { cardService } from '../reducers/cards';
import { appStateService } from '../reducers/app-state';

export default angular.module('app.services', [])
    .service('cardsService', ['$http', cardService])
    .service('appStateService', ['cardsService', appStateService])
    .name;
