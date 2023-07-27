import { createStore, combineReducers } from "redux";
import { welcomeSliderReducer } from "./welcomeSliderReducer";
import { burgerMenuReducer } from "./burgerMenuReducer";

const rootReducers = combineReducers({
  welcomeSliderReducer,
  burgerMenuReducer,
});

export const store = createStore(rootReducers);
