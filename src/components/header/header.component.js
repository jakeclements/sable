/**
 * Header Component
 */
import './header.template';
import './header.styles';

const HeaderComponent = {
    templateUrl: 'headerTemplate',
    bindings: {
        toggleDifficulty: '&',
        difficultyChecked: '<'
    }
}

export default HeaderComponent
