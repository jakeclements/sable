/**
 * Cards Controller
 */
class CardsPageController {

    constructor($ngRedux, $scope, cardsService) {
        const actions = Object.assign({}, cardsService);
        let unsubscribe = $ngRedux.connect(this.mapStateToThis, actions)(this);
        $scope.$on('$destroy', unsubscribe);
        this.getRandomStarWarsChar();
    }

    mapStateToThis(state) {
        return {
            name: state.card.name
        }
    }

}

// Dependency Injection
CardsPageController.$inject = [
    '$ngRedux',
    '$scope',
    'cardsService'
];

export default CardsPageController
