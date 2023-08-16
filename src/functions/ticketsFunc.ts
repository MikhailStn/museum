import { store } from "../store";

export const increaseBasicTicket = () => {
  store.dispatch({
    type: "INCREASE_BASIC_TICKET",
    payload: 1,
  });
};

export const decreaseBasicTicket = () => {
  store.dispatch({
    type: "DECREASE_BASIC_TICKET",
    payload: 1,
  });
};

export const increaseSeniorTicket = () => {
  store.dispatch({
    type: "INCREASE_SENIOR_TICKET",
    payload: 1,
  });
};

export const decreaseSeniorTicket = () => {
  store.dispatch({
    type: "DECREASE_SENIOR_TICKET",
    payload: 1,
  });
};
