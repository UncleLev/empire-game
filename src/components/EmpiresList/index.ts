import { connect } from 'react-redux';
import * as selectors from 'src/store/selectors';
import { RootState } from 'src/store/store';
import EmpiresList from './EmpiresList';

export default connect((state: RootState) => ({
    empiresList: selectors.getEmpiresList(state),
    wordList: selectors.getWordsList(state),
}))(EmpiresList);
