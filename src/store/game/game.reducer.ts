import { nanoid } from 'nanoid';
import * as actionTypes from './game.types';

export type wordListItemType = {
    id: string;
    value: string;
    fake: boolean;
    empireId: string;
};

interface stateInterface {
    category: string;
    wordsList: wordListItemType[];
}

const initialState: stateInterface = {
    category: '',
    wordsList: [],
};
type actionCustomType = {
    type: string;
    payload: any;
};

const gameReducer = (state = initialState, { type, payload }: actionCustomType) => {
    switch (type) {
        case actionTypes.CHANGE_GAME_CATEGORY:
            return { ...state, category: payload };

        case actionTypes.ADD_WORLD:
            return {
                ...state,
                wordsList: [
                    ...state.wordsList,
                    {
                        id: nanoid(),
                        value: payload.word,
                        fake: payload.fake,
                        empireId: '',
                    },
                ],
            };

        default:
            return state;
    }
};

export default gameReducer;
