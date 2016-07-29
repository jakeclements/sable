/* ==========================================================================
   Test Controller
   ========================================================================== */
class TestController {

    constructor($ngRedux, $scope, testService) {
        /* ngRedux will merge the requested state's slice and actions onto this,
        you don't need to redefine them in your controller */

        let unsubscribe = $ngRedux.connect(this.mapStateToThis, testService)(this);
        $scope.$on('$destroy', unsubscribe);
    }

    // Which part of the Redux global state does our component want to receive?
    mapStateToThis(state) {
        return {
            clicked: state.sample.clicked,
            user: state.sample.user
        };
    }

    loadUser() {
        this.getUser()
    }

}

// An example of injection
TestController.$inject = ['$ngRedux', '$scope', 'testService'];

export default TestController
