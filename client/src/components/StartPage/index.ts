import { connect } from 'react-redux';
import * as selectors from '../../store/selectors';
import * as actions from '../../store/actions';
import StartPage from './StartPage';
import { RootState } from '../../store/store';

export default connect(
    (state: RootState) => ({
        category: selectors.getGameCategory(state),
    }),
    {
        changeGameCategory: actions.changeGameCategory,
    },
)(StartPage);
