/**
 * Toggle Switch Component
 */
import './toggle-switch.template';
import './toggle-switch.styles';

const HeaderComponent = {
    templateUrl: 'toggleTemplate',
    bindings: {
        toggle: '&',
        checked: '<'
    }
}

export default HeaderComponent
