import { RootState } from 'src/store/store';
import { STORE_KEY } from '../constants/general.constants';

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem(STORE_KEY);
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        console.warn("can't get localStorage", err);
        return undefined;
    }
};

export const saveState = (state: RootState) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem(STORE_KEY, serializedState);
    } catch (err) {
        console.warn("can't set localStorage", err);
    }
};
