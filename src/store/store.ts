import { createStore, combineReducers } from 'redux';
import gameReducer from './game/game.reducer';

const reducer = combineReducers({ game: gameReducer });

const store = createStore(reducer);

export default store;
