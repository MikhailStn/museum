type ChangeDate = {
  type: "CHANGE_DATE";
  payload: string;
};

type ChangeTime = {
  type: "CHANGE_TIME";
  payload: string;
};

type IncreaseBasicTicket = {
  type: "INCREASE_BASIC_TICKET";
  payload: number;
};

type DecreaseBasicTicket = {
  type: "DECREASE_BASIC_TICKET";
  payload: number;
};

type IncreaseSeniorTicket = {
  type: "INCREASE_SENIOR_TICKET";
  payload: number;
};

type DecreaseSeniorTicket = {
  type: "DECREASE_SENIOR_TICKET";
  payload: number;
};

type ChangeTicketType = {
  type: "CHANGE_TICKET_TYPE";
  payload: string;
  basic: number;
  senior: number;
};

type ChangeName = {
  type: "CHANGE_NAME";
  payload: string;
};

type ChangeEmail = {
  type: "CHANGE_EMAIL";
  payload: string;
};

type ChangePhone = {
  type: "CHANGE_PHONE";
  payload: string;
};

type ChangeCardNum = {
  type: "CHANGE_CARD_NUMBER";
  payload: string;
};

type ChangeCardMonth = {
  type: "CHANGE_CARD_MONTH";
  payload: string;
};

type ChangeCardYear = {
  type: "CHANGE_CARD_YEAR";
  payload: string;
};

type ChangeCardHolder = {
  type: "CHANGE_CARD_HOLDER";
  payload: string;
};

type ChangeCardCvv = {
  type: "CHANGE_CARD_CVV";
  payload: string;
};

type ReturnDefault = {
  type: "RETURN_DEFAULT_STATE";
};

export type TicketActions =
  | ChangeDate
  | ChangeTime
  | IncreaseBasicTicket
  | DecreaseBasicTicket
  | IncreaseSeniorTicket
  | DecreaseSeniorTicket
  | ChangeTicketType
  | ChangeName
  | ChangeEmail
  | ChangePhone
  | ChangeCardNum
  | ChangeCardMonth
  | ChangeCardYear
  | ChangeCardHolder
  | ChangeCardCvv
  | ReturnDefault;
