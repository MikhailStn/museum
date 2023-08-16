type ChangeDate = {
  type: "CHANGE_DATE";
  payload: string;
};

type ChangeTime = {
  type: "CHANGE_TIME";
  payload: string;
};

type IncreaseBasicTicker = {
  type: "INCREASE_BASIC_TICKET";
  payload: number;
};

type DecreaseBasicTicker = {
  type: "DECREASE_BASIC_TICKET";
  payload: number;
};

type IncreaseSeniorTicker = {
  type: "INCREASE_SENIOR_TICKET";
  payload: number;
};

type DecreaseSeniorTicker = {
  type: "DECREASE_SENIOR_TICKET";
  payload: number;
};

export type TicketActions =
  | ChangeDate
  | ChangeTime
  | IncreaseBasicTicker
  | DecreaseBasicTicker
  | IncreaseSeniorTicker
  | DecreaseSeniorTicker;
