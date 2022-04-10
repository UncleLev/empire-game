import { createSelector } from 'reselect';
import { RootState } from '../store';
import { wordListItemType } from './game.reducer';

const game = (state: RootState) => state.game;

export const getGameCategory = createSelector(game, (state) => state.category);
export const getWordsList = createSelector(game, (state) => state.wordsList);
export const getEmpiresList = createSelector(game, (state) =>
    state.wordsList.filter((word: wordListItemType) => !word.empireId),
);

export const getWinner = createSelector(game, (state) =>
    state.wordsList.find((word) => !word.empireId && word.subjects.length),
);

export const getEndOfGame = createSelector(
    game,
    (state) =>
        state.wordsList.filter((word) => word.subjects.length).length === 1 &&
        state.wordsList.filter((word) => !word.empireId).length === 1,
);

export const getEmpiresColors = createSelector(game, (state) => state.empiresColors);
