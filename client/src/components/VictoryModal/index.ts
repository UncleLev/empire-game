import { connect } from 'react-redux';
import * as selectors from 'src/store/selectors';
import * as actions from 'src/store/actions';
import { RootState } from 'src/store/store';
import VictoryModal from './VictoryModal';

export default connect(
    (state: RootState) => ({
        winner: selectors.getWinner(state),
    }),
    {
        restartGame: actions.restartGame,
    },
)(VictoryModal);
