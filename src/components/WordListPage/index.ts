import { connect } from 'react-redux';
import * as selectors from 'src/store/selectors';
import { RootState } from 'src/store/store';
import WordListPage from './WordListPage';

export default connect((state: RootState) => ({
    isEndOfGame: selectors.getEndOfGame(state),
}))(WordListPage);
