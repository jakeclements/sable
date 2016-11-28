/**
 * About Page
 */
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import AboutPageComponent from './about-page.component';

const AboutPage = angular
    .module('about.page', [ uiRouter ])
    .component('aboutPage', AboutPageComponent)
    .config($stateProvider => {
        $stateProvider
            .state('about', {
                url: '/about',
                component: 'aboutPage'
            });
    })
    .name;

export default AboutPage
