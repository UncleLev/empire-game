import { throttle } from 'lodash';
import { createStore, combineReducers } from 'redux';
import { loadState, saveState } from 'src/service/helpers/store.helpers';
import gameReducer from './game/game.reducer';

const persistedState = loadState();
const reducer = combineReducers({ game: gameReducer });

const store = createStore(reducer, persistedState);

store.subscribe(
    throttle(() => {
        saveState(store.getState());
    }, 1000),
);

export type RootState = ReturnType<typeof store.getState>;

export default store;
