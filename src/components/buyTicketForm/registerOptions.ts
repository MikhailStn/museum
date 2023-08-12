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
};
