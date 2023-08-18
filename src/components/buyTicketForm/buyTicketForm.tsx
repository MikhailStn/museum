import "./buyTicketForm.css";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { FormValues } from "../../types/form";
import { registerOptions } from "../../data/registerOptions";
import { selectOptions } from "../../data/selectOptions";
import { Overview } from "../overview/overview";
import { RootState } from "../../types/rootState";
import { useDispatch, useSelector } from "react-redux";
import { date } from "../../store/ticketsReducer";
import { increaseBasicTicket, decreaseBasicTicket, increaseSeniorTicket, decreaseSeniorTicket } from "../../functions/ticketsFunc";

export function BuyTicketForm() {
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state.ticketReducer);
  const [totalDangerStyle, setTotalDangerStyle] = useState<React.CSSProperties>({ opacity: 0, visibility: "hidden" });
  const [popupStyle, setPopupStyle] = useState<React.CSSProperties>({ opacity: 0, visibility: "hidden" });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = handleSubmit(() => {
    if (state.basicNum == 0 && state.seniorNum == 0) {
      return;
    } else {
      dispatch({
        type: "RETURN_DEFAULT_STATE",
      });
      setPopupStyle({ opacity: 1, visibility: "visible" });
      setTimeout(() => {
        setPopupStyle({ opacity: 0, visibility: "hidden" });
      }, 2000);
    }
  });

  return (
    <form className="form__container" onSubmit={onSubmit}>
      <div className="form__popup" style={popupStyle}>
        <div className="form__success-window">Success!</div>
      </div>
      <div className="form__inputs">
        <div className="time__inputs">
          <input className="date__input" {...register("date", registerOptions.date)} type="date" min={date} value={state.date}></input>
          <input className="time__input" {...register("time", registerOptions.time)} type="time" value={state.time}></input>
          <p className="text-danger">{errors?.date && errors.date.message}</p>
          <p className="text-danger">{errors?.time && errors.time.message}</p>
        </div>
        <input
          value={state.name}
          className="form__input input__name"
          {...register("name", registerOptions.name)}
          placeholder="Name"
          autoComplete="none"
        />
        <p className="text-danger">{errors?.name && errors.name.message}</p>
        <input
          value={state.email}
          className="form__input input__mail"
          {...register("email", registerOptions.email)}
          placeholder="E-mail"
          type="email"
          autoComplete="none"
        />
        <p className="text-danger">{errors?.email && errors.email.message}</p>
        <input
          value={state.phone}
          className="form__input input__phone"
          {...register("tel", registerOptions.tel)}
          placeholder="Phone"
          type="number"
          autoComplete="none"
        />
        <p className="text-danger">{errors?.tel && errors.tel.message}</p>
        <select
          className="form__input form__select"
          value={state.ticketType}
          onChange={(e) => {
            if (e.target.value == "Permanent Exhibition") {
              dispatch({
                type: "CHANGE_TICKET_TYPE",
                payload: e.target.value,
                basic: 20,
                senior: 10,
              });
            } else if (e.target.value == "Temporary Exhibition") {
              dispatch({
                type: "CHANGE_TICKET_TYPE",
                payload: e.target.value,
                basic: 30,
                senior: 15,
              });
            } else if (e.target.value == "Combined Admission") {
              dispatch({
                type: "CHANGE_TICKET_TYPE",
                payload: e.target.value,
                basic: 40,
                senior: 20,
              });
            }
          }}
        >
          {selectOptions.map((el) => (
            <option className="form__option" key={el.value} value={el.label}>
              {el.label}
            </option>
          ))}
        </select>
        <div className="entry__tickets">
          <h3 className="entry__tickets-title">Entry Ticket</h3>
          <div className="entry__tickets-items">
            <div className="entry__tickets-item">
              <p className="entry__tickets-item-sub">
                Basic 18+ (
                {state.ticketType == "Permanent Exhibition"
                  ? 20
                  : false || state.ticketType == "Temporary Exhibition"
                  ? 30
                  : false || state.ticketType == "Combined Admission"
                  ? 40
                  : false}{" "}
                €)
              </p>
              <div className="entry__tickets-btns">
                <button
                  className="entry__tickets-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    decreaseBasicTicket();
                  }}
                >
                  -
                </button>
                <span className="entry__tickets-num">{state.basicNum}</span>
                <button
                  className="entry__tickets-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    increaseBasicTicket();
                    setTotalDangerStyle({ opacity: 0, visibility: "hidden" });
                  }}
                >
                  +
                </button>
              </div>
            </div>
            <div className="entry__tickets-item">
              <p className="entry__tickets-item-sub">
                Senior 65+ (
                {state.ticketType == "Permanent Exhibition"
                  ? 10
                  : false || state.ticketType == "Temporary Exhibition"
                  ? 15
                  : false || state.ticketType == "Combined Admission"
                  ? 20
                  : false}{" "}
                €)
              </p>
              <div className="entry__tickets-btns">
                <button
                  className="entry__tickets-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    decreaseSeniorTicket();
                  }}
                >
                  -
                </button>
                <span className="entry__tickets-num">{state.seniorNum}</span>
                <button
                  className="entry__tickets-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    increaseSeniorTicket();
                    setTotalDangerStyle({ opacity: 0, visibility: "hidden" });
                  }}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="form__overview">
        <Overview />
        <div className="form__card">
          <div className="form__total-wrapper">
            <div className="form__total">
              <p className="form__total-sub">Total:</p>
              <p className="form__total-amount">{state.basicSum + state.seniorSum} €</p>
            </div>
            <p className="text-danger total-danger" style={totalDangerStyle}>
              You should order at least one ticket
            </p>
          </div>
          <div className="card">
            <div className="card__front">
              <p className="card__sub">Card number</p>
              <input
                className="card__input input__card-num"
                {...register("cardNum", registerOptions.cardNum)}
                value={state.cardNum}
                type="number"
                placeholder="0000 0000 0000 0000"
              ></input>
              <p className="card__text-danger">{errors?.cardNum && errors.cardNum.message}</p>
              <p className="card__sub">Expiration date</p>
              <div className="card__expiration">
                <input
                  className="card__input input__card-month"
                  {...register("cardMonth", registerOptions.cardMonth)}
                  value={state.cardMonth}
                  type="number"
                  placeholder="00"
                ></input>
                <input
                  className="card__input input__card-year"
                  value={state.cardYear}
                  {...register("cardYear", registerOptions.cardYear)}
                  type="number"
                  placeholder="0000"
                ></input>
              </div>
              <p className="card__text-danger">
                {(errors?.cardMonth && errors.cardMonth.message) || (errors?.cardYear && errors.cardYear.message)}
              </p>
              <p className="card__sub">Cardholder name</p>
              <input
                className="card__input input__card-holder"
                value={state.cardHolder}
                {...register("cardName", registerOptions.cardName)}
                type="text"
              ></input>
              <p className="card__text-danger">{errors?.cardName && errors.cardName.message}</p>
            </div>
            <div className="card__back">
              <div className="card__back-overlay"></div>
              <div className="card__back-cvv">
                <input
                  className="card__back-input input-cvv"
                  value={state.cardCvv}
                  {...register("cardCvv", registerOptions.cardCvv)}
                  placeholder="000"
                  type="number"
                ></input>
                <p className="card__text-danger">{errors?.cardCvv && errors.cardCvv.message}</p>
              </div>
            </div>
          </div>
        </div>
        <button
          className="form__button"
          type="submit"
          onClick={() => {
            if (state.basicNum == 0 && state.seniorNum == 0) {
              setTotalDangerStyle({ opacity: 1, visibility: "visible" });
              return;
            } else {
              setTotalDangerStyle({ opacity: 0, visibility: "hidden" });
            }
          }}
        >
          Book
        </button>
      </div>
    </form>
  );
}
