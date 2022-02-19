import * as actionTypes from './game.types';

interface stateInterface {
    category: string;
}

const initialState: stateInterface = {
    category: '',
};
type actionCustomType = {
    type: string;
    payload: any;
};

const gameReducer = (state = initialState, { type, payload }: actionCustomType) => {
    switch (type) {
        case actionTypes.CHANGE_GAME_CATEGORY:
            return { ...state, category: payload };

        default:
            return state;
    }
};

export default gameReducer;
