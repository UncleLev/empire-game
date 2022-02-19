import { connect } from 'react-redux';
import AddWordsPage from './AddWordsPage';
import * as selectors from '../../store/selectors';
import * as actions from '../../store/actions';
import { RootState } from '../../store/store';

export default connect(
    (state: RootState) => ({
        wordsList: selectors.getWordsList(state),
        category: selectors.getGameCategory(state),
    }),
    { addWord: actions.addWord },
)(AddWordsPage);
