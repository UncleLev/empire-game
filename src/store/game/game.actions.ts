import * as actionTypes from './game.types';

export const changeGameCategory = (value: string) => ({ type: actionTypes.CHANGE_GAME_CATEGORY, payload: value });

export const addWord = (payload: { word: string; fake: boolean }) => ({ type: actionTypes.ADD_WORLD, payload });
