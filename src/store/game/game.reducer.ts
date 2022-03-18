import { nanoid } from 'nanoid';
import * as actionTypes from './game.types';

export type subjectType = {
    id: string;
    value: string;
};

export type wordListItemType = {
    id: string;
    value: string;
    fake: boolean;
    empireId: string;
    subjects: subjectType[];
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
            return { ...initialState, category: payload };

        case actionTypes.ADD_WORLD:
            return {
                ...state,
                wordsList: [
                    ...state.wordsList,
                    {
                        id: nanoid(),
                        value: payload.value,
                        fake: payload.fake,
                        empireId: '',
                        subjects: [],
                    },
                ],
            };
        case actionTypes.DEFEAT_EMPIRE: {
            const empire = state.wordsList.find(({ id }) => payload.empire.id === id);
            const defeat = state.wordsList.find(({ id }) => payload.defeat.id === id);

            if (!empire || !defeat) {
                console.error('Can`t find empire or defeat');
                return state;
            }
            empire.subjects = [...defeat.subjects, ...empire.subjects, { id: defeat.id, value: defeat.value }];

            defeat.subjects = [];
            defeat.empireId = empire.id;

            const newWordList = state.wordsList.map((word) => {
                if (word.id === empire!.id) return empire;
                if (word.id === defeat!.id) return defeat;
                return word;
            });

            return { ...state, wordsList: newWordList };
        }

        default:
            return state;
    }
};

export default gameReducer;
