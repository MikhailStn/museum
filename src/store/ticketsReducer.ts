import { TicketActions } from "../types/tickets";

const dateMs = new Date(Date.now());
export const date =
  `${dateMs.getFullYear()}-` +
  `${dateMs.getMonth() < 10 ? "0" + (Number(dateMs.getMonth()) + 1) : Number(dateMs.getMonth()) + 1}-` +
  `${dateMs.getDate() < 10 ? "0" + dateMs.getDate() : dateMs.getDate()}`;

const time =
  `${dateMs.getHours() < 10 ? "0" + dateMs.getHours() : dateMs.getHours()}` +
  ":" +
  `${dateMs.getMinutes() < 10 ? "0" + dateMs.getMinutes() : dateMs.getMinutes()}`;

const defaultState = {
  total: 0,
  ticketType: "Permanent Exhibition",
  basicAmount: 20,
  seniorAmount: 10,
  basicNum: 0,
  seniorNum: 0,
  basicSum: 0,
  seniorSum: 0,
  date: date,
  time: time,
};

export const ticketReducer = (state = defaultState, action: TicketActions) => {
  switch (action.type) {
    case "CHANGE_DATE":
      return {
        ...state,
        date: action.payload,
      };
    case "CHANGE_TIME":
      return {
        ...state,
        time: action.payload,
      };
    case "INCREASE_BASIC_TICKET":
      return {
        ...state,
        basicNum: state.basicNum + action.payload,
        basicSum: (state.basicNum + action.payload) * state.basicAmount,
      };
    case "DECREASE_BASIC_TICKET":
      if (state.basicNum == 0) {
        return {
          ...state,
          basicNum: 0,
        };
      } else {
        return {
          ...state,
          basicNum: state.basicNum - action.payload,
          basicSum: (state.basicNum - action.payload) * state.basicAmount,
        };
      }
    case "INCREASE_SENIOR_TICKET":
      return {
        ...state,
        seniorNum: state.seniorNum + action.payload,
        seniorSum: (state.seniorNum + action.payload) * state.seniorAmount,
      };
    case "DECREASE_SENIOR_TICKET":
      if (state.seniorNum == 0) {
        return {
          ...state,
          seniorNum: 0,
        };
      } else {
        return {
          ...state,
          seniorNum: state.seniorNum - action.payload,
          seniorSum: (state.seniorNum - action.payload) * state.seniorAmount,
        };
      }
    case "CHANGE_TICKET_TYPE": {
      return {
        ...state,
        ticketType: action.payload,
        basicAmount: action.basic,
        seniorAmount: action.senior,
        basicSum: state.basicNum * action.basic,
        seniorSum: state.seniorNum * action.senior,
      };
    }
    default:
      return state;
  }
};
