import "./buyTicketForm.css";
import { useForm } from "react-hook-form";
import { FormValues } from "../../types/form";
import { registerOptions } from "../../data/registerOptions";
import { selectOptions } from "../../data/selectOptions";
import { Overview } from "../overview/overview";

export function BuyTicketForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <form className="form__container" onSubmit={onSubmit}>
      <div className="form__inputs">
        <div className="time__inputs">
          <input className="time__input" {...register("date", registerOptions.date)} type="date"></input>
          <input className="date__input" {...register("time", registerOptions.time)} type="time"></input>
          <p className="text-danger">{errors?.date && errors.date.message}</p>
          <p className="text-danger">{errors?.time && errors.time.message}</p>
        </div>
        <input className="form__input input__name" {...register("name", registerOptions.name)} placeholder="Name" />
        <p className="text-danger">{errors?.name && errors.name.message}</p>
        <input className="form__input input__mail" {...register("email", registerOptions.email)} placeholder="E-mail" type="email" />
        <p className="text-danger">{errors?.email && errors.email.message}</p>
        <input className="form__input input__phone" {...register("tel", registerOptions.tel)} placeholder="Phone" type="number" />
        <p className="text-danger">{errors?.tel && errors.tel.message}</p>
        <select className="form__input form__select">
          {selectOptions.map((el) => (
            <option className="form__option" key={el.value}>
              {el.label}
            </option>
          ))}
        </select>
        <div className="entry__tickets">
          <h3 className="entry__tickets-title">Entry Ticket</h3>
          <div className="entry__tickets-items">
            <div className="entry__tickets-item">
              <p className="entry__tickets-item-sub">Basic 18+ (20 €)</p>
              <div className="entry__tickets-btns">
                <button
                  className="entry__tickets-btn"
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                >
                  -
                </button>
                <span className="entry__tickets-num">0</span>
                <button
                  className="entry__tickets-btn"
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                >
                  +
                </button>
              </div>
            </div>
            <div className="entry__tickets-item">
              <p className="entry__tickets-item-sub">Senior 65+ (10 €)</p>
              <div className="entry__tickets-btns">
                <button
                  className="entry__tickets-btn"
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                >
                  -
                </button>
                <span className="entry__tickets-num">0</span>
                <button
                  className="entry__tickets-btn"
                  onClick={(e) => {
                    e.preventDefault();
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
          <div className="form__total">
            <p className="form__total-sub">Total:</p>
            <p className="form__total-amount">80 €</p>
          </div>
          <div className="card">
            <div className="card__front">
              <p className="card__sub">Card number</p>
              <input
                className="card__input input__card-num"
                {...register("cardNum", registerOptions.cardNum)}
                type="number"
                placeholder="0000 0000 0000 0000"
              ></input>
              <p className="card__text-danger">{errors?.cardNum && errors.cardNum.message}</p>
              <p className="card__sub">Expiration date</p>
              <div className="card__expiration">
                <input
                  className="card__input input__card-month"
                  {...register("cardMonth", registerOptions.cardMonth)}
                  type="number"
                  placeholder="00"
                ></input>
                <input
                  className="card__input input__card-year"
                  {...register("cardYear", registerOptions.cardYear)}
                  type="number"
                  placeholder="0000"
                ></input>
              </div>
              <p className="card__text-danger">
                {(errors?.cardMonth && errors.cardMonth.message) || (errors?.cardYear && errors.cardYear.message)}
              </p>
              <p className="card__sub">Cardholder name</p>
              <input className="card__input input__card-holder" {...register("cardName", registerOptions.cardName)} type="text"></input>
              <p className="card__text-danger">{errors?.cardName && errors.cardName.message}</p>
            </div>
            <div className="card__back">
              <div className="card__back-overlay"></div>
              <div className="card__back-cvv">
                <input
                  className="card__back-input input-cvv"
                  {...register("cardCvv", registerOptions.cardCvv)}
                  placeholder="000"
                  type="number"
                ></input>
                <p className="card__text-danger">{errors?.cardCvv && errors.cardCvv.message}</p>
              </div>
            </div>
          </div>
        </div>
        <button className="form__button" type="submit">
          Book
        </button>
      </div>
    </form>
  );
}
