/* ==========================================================================
   Test Controller
   ========================================================================== */
import * as actions from '../../actions/sample.actions';

class TestController {

    constructor($ngRedux, $scope) {
        /* ngRedux will merge the requested state's slice and actions onto this,
        you don't need to redefine them in your controller */

        let unsubscribe = $ngRedux.connect(this.mapStateToThis, actions)(this);
        $scope.$on('$destroy', unsubscribe);
    }

    // Which part of the Redux global state does our component want to receive?
    mapStateToThis(state) {
        return {
            clicked: state.sampleReducer.clicked
        };
    }

}

// An example of injection
TestController.$inject = ['$ngRedux', '$scope'];

export default TestController
