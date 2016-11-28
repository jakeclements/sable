/**
 * App Controller
 */
class AppController {

    constructor($ngRedux, $scope, appStateService) {
        const actions = Object.assign({}, appStateService);
        let unsubscribe = $ngRedux.connect(this.mapStateToThis, actions)(this);
        $scope.$on('$destroy', unsubscribe);
        this.toggleDifficultySwitch = this.toggleDifficultySwitch.bind(this);
    }

    toggleDifficultySwitch() {
        this.toggleDifficulty(this.card.id, !this.difficultyChecked);
    }

    mapStateToThis(state) {
        return {
            difficultyChecked: state.appState.difficulty === 'wookie' ? true : false,
            card: state.card ? state.card : false
        }
    }
}

// Dependency Injection
AppController.$inject = [
    '$ngRedux',
    '$scope',
    'appStateService'
];

export default AppController
