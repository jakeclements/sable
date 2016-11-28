/**
 * Card Module
 */
import angular from 'angular';
import CardComponent from './card.component';

const CardModule = angular
    .module('card.module', [])
    .component('card', CardComponent)
    .name;

export default CardModule
