import { store } from "../store";

export const registerOptions = {
  name: {
    required: "Name is required",
    minLength: {
      value: 3,
      message: "Name must have at least 3 characters",
    },
    onChange: (e: Event) => {
      const target = e.target as HTMLInputElement;
      store.dispatch({
        type: "CHANGE_NAME",
        payload: target.value,
      });
    },
  },
  email: {
    required: "Email is required",
    onChange: (e: Event) => {
      const target = e.target as HTMLInputElement;
      store.dispatch({
        type: "CHANGE_EMAIL",
        payload: target.value,
      });
    },
  },
  date: {
    required: "Date is required",
    onChange: (e: Event) => {
      const target = e.target as HTMLInputElement;
      store.dispatch({
        type: "CHANGE_DATE",
        payload: target.value,
      });
    },
  },
  time: {
    required: "Time is required",
    onChange: (e: Event) => {
      const target = e.target as HTMLInputElement;
      store.dispatch({
        type: "CHANGE_TIME",
        payload: target.value,
      });
    },
  },
  tel: {
    required: "Phone is required",
    minLength: {
      value: 6,
      message: "Phone must have at least 6 characters",
    },
    onChange: (e: Event) => {
      const target = e.target as HTMLInputElement;
      store.dispatch({
        type: "CHANGE_PHONE",
        payload: target.value,
      });
    },
  },
  cardNum: {
    required: "Card number should contain 16 numbers",
    minLength: {
      value: 16,
      message: "Card number should contain 16 numbers",
    },
    maxLength: {
      value: 16,
      message: "Card number should contain 16 numbers",
    },
    onChange: (e: Event) => {
      const target = e.target as HTMLInputElement;
      store.dispatch({
        type: "CHANGE_CARD_NUMBER",
        payload: target.value,
      });
    },
  },
  cardMonth: {
    required: "Enter correct expiration date",
    max: {
      value: 12,
      message: "Enter correct expiration date",
    },
    maxLength: {
      value: 2,
      message: "Enter correct expiration date",
    },
    onChange: (e: Event) => {
      const target = e.target as HTMLInputElement;
      store.dispatch({
        type: "CHANGE_CARD_MONTH",
        payload: target.value,
      });
    },
  },
  cardYear: {
    required: "Enter correct expiration date",
    minLength: {
      value: 4,
      message: "Enter correct expiration date",
    },
    maxLength: {
      value: 4,
      message: "Enter correct expiration date",
    },
    min: {
      value: 2023,
      message: "Enter correct expiration date",
    },
    onChange: (e: Event) => {
      const target = e.target as HTMLInputElement;
      store.dispatch({
        type: "CHANGE_CARD_YEAR",
        payload: target.value,
      });
    },
  },
  cardName: {
    required: "Name is required",
    minLength: {
      value: 3,
      message: "Name must have at least 3 characters",
    },
    onChange: (e: Event) => {
      const target = e.target as HTMLInputElement;
      store.dispatch({
        type: "CHANGE_CARD_HOLDER",
        payload: target.value,
      });
    },
  },
  cardCvv: {
    required: "Enter correct cvv code",
    minLength: {
      value: 3,
      message: "Enter correct cvv code",
    },
    maxLength: {
      value: 3,
      message: "Enter correct cvv code",
    },
    onChange: (e: Event) => {
      const target = e.target as HTMLInputElement;
      store.dispatch({
        type: "CHANGE_CARD_CVV",
        payload: target.value,
      });
    },
  },
};
