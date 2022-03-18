import { wordListItemType } from './game.reducer';
import * as actionTypes from './game.types';

export const changeGameCategory = (value: string) => ({ type: actionTypes.CHANGE_GAME_CATEGORY, payload: value });

export const addWord = (payload: { word: string; fake: boolean }) => ({ type: actionTypes.ADD_WORLD, payload });

export const defeatEmpire = (payload: { empire: wordListItemType; defeat: wordListItemType }) => ({
    type: actionTypes.DEFEAT_EMPIRE,
    payload,
});
