import { createStore, combineReducers } from 'redux';
import { welcomeSliderReducer } from './welcomeSliderReducer';

const rootReducers = combineReducers({
  welcomeSliderReducer,
});

export const store = createStore(rootReducers);
