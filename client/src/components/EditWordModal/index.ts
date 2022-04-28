import { connect } from 'react-redux';
import * as selectors from 'src/store/selectors';
import * as actions from 'src/store/actions';
import { RootState } from 'src/store/store';
import EditWordModal from './EditWordModal';

export default connect(
    (state: RootState) => ({
        empiresList: selectors.getEmpiresList(state),
    }),
    {
        editWord: actions.editWord,
        deleteWord: actions.deleteWord,
    },
)(EditWordModal);
