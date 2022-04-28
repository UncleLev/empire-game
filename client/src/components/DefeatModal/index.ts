import { connect } from 'react-redux';
import { RootState } from 'src/store/store';
import * as selectors from 'src/store/selectors';
import * as actions from 'src/store/actions';
import DefeatModal from './DefeatModal';

export default connect(
    (state: RootState) => ({
        empiresList: selectors.getEmpiresList(state),
    }),
    {
        defeatEmpire: actions.defeatEmpire,
    },
)(DefeatModal);
