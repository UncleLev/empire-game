import { connect } from 'react-redux';
import WordList from './WordList';
import * as selectors from '../../store/selectors';
import { RootState } from '../../store/store';

export default connect((state: RootState) => ({
    wordsList: selectors.getWordsList(state),
}))(WordList);
