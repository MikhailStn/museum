import { createStore, combineReducers } from "redux";
import { welcomeSliderReducer } from "./welcomeSliderReducer";
import { burgerMenuReducer } from "./burgerMenuReducer";
import { ticketReducer } from "./ticketsReducer";

const rootReducers = combineReducers({
  welcomeSliderReducer,
  burgerMenuReducer,
  ticketReducer,
});

export const store = createStore(rootReducers);
