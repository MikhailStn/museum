export const registerOptions = {
  name: {
    required: "Name is required",
    minLength: {
      value: 3,
      message: "Name must have at least 3 characters",
    },
  },
  email: { required: "Email is required" },
  date: { required: "Date is required" },
  time: { required: "Time is required" },
  tel: {
    required: "Phone is required",
    minLength: {
      value: 6,
      message: "Phone must have at least 6 characters",
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
  },
  cardName: {
    required: "Name is required",
    minLength: {
      value: 3,
      message: "Name must have at least 3 characters",
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
  },
};
