import { TicketActions } from "../types/tickets";

const dateMs = new Date(Date.now());
export const date =
  `${dateMs.getFullYear()}-` +
  `${dateMs.getMonth() < 10 ? "0" + (Number(dateMs.getMonth()) + 1) : Number(dateMs.getMonth()) + 1}-` +
  `${dateMs.getDate() < 10 ? "0" + dateMs.getDate() : dateMs.getDate()}`;

export const time =
  `${dateMs.getHours() < 10 ? "0" + dateMs.getHours() : dateMs.getHours()}` +
  ":" +
  `${dateMs.getMinutes() < 10 ? "0" + dateMs.getMinutes() : dateMs.getMinutes()}`;

const defaultState = {
  ticketType: "Permanent Exhibition",
  basicAmount: 20,
  seniorAmount: 10,
  basicNum: 0,
  seniorNum: 0,
  basicSum: 0,
  seniorSum: 0,
  date: "",
  time: "",
  name: "",
  email: "",
  phone: "",
  cardNum: "",
  cardMonth: "",
  cardYear: "",
  cardHolder: "",
  cardCvv: "",
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
    case "CHANGE_NAME": {
      return {
        ...state,
        name: action.payload,
      };
    }
    case "CHANGE_EMAIL": {
      return {
        ...state,
        email: action.payload,
      };
    }
    case "CHANGE_PHONE": {
      return {
        ...state,
        phone: action.payload,
      };
    }
    case "CHANGE_CARD_NUMBER": {
      return {
        ...state,
        cardNum: action.payload,
      };
    }
    case "CHANGE_CARD_MONTH": {
      return {
        ...state,
        cardMonth: action.payload,
      };
    }
    case "CHANGE_CARD_YEAR": {
      return {
        ...state,
        cardYear: action.payload,
      };
    }
    case "CHANGE_CARD_HOLDER": {
      return {
        ...state,
        cardHolder: action.payload,
      };
    }
    case "CHANGE_CARD_CVV": {
      return {
        ...state,
        cardCvv: action.payload,
      };
    }
    case "RETURN_DEFAULT_STATE": {
      return {
        ...state,
        basicNum: 0,
        seniorNum: 0,
        basicSum: 0,
        seniorSum: 0,
        date: "",
        time: "",
        name: "",
        email: "",
        phone: "",
        cardNum: "",
        cardMonth: "",
        cardYear: "",
        cardHolder: "",
        cardCvv: "",
      };
    }
    default:
      return state;
  }
};
