import { createSelector } from 'reselect';
import { RootState } from '../store';

const game = (state: RootState) => state.game;

export const getGameCategory = createSelector(game, (state) => state.category);
export const getWordsList = createSelector(game, (state) => state.wordsList);
