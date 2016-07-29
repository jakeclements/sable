/* ==========================================================================
   Test Controller
   ========================================================================== */
import { stateGo, stateReload, stateTransitionTo } from '../../actions/router.actions';

class TestController {

    constructor($ngRedux, $scope, testService) {
        /* ngRedux will merge the requested state's slice and actions onto this,
        you don't need to redefine them in your controller */

        // Merge together router actions
        const routerActions = { stateGo, stateReload, stateTransitionTo };

        // Merge all actions to a single object
        const actions = Object.assign({}, routerActions, testService)

        let unsubscribe = $ngRedux.connect(this.mapStateToThis, actions)(this);
        $scope.$on('$destroy', unsubscribe);
    }

    // Which part of the Redux global state does our component want to receive?
    mapStateToThis(state) {
        return {
            clicked: state.sample.clicked,
            user: state.sample.user
        };
    }

}

// An example of injection
TestController.$inject = ['$ngRedux', '$scope', 'testService'];

export default TestController
