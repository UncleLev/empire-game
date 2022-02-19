import { createStore, combineReducers } from 'redux';
import gameReducer from './game/game.reducer';

const reducer = combineReducers({ game: gameReducer });

const store = createStore(reducer);

export type RootState = ReturnType<typeof store.getState>;

export default store;
