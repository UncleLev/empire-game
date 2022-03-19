import { createSelector } from 'reselect';
import { RootState } from '../store';
import { wordListItemType } from './game.reducer';

const game = (state: RootState) => state.game;

export const getGameCategory = createSelector(game, (state) => state.category);
export const getWordsList = createSelector(game, (state) => state.wordsList);
export const getEmpiresList = createSelector(game, (state) =>
    state.wordsList.filter((word: wordListItemType) => !word.empireId),
);
