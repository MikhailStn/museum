import "./buyTicketForm.css";
import { useForm } from "react-hook-form";
import { FormValues } from "../../types/form";
import { registerOptions } from "./registerOptions";
import { selectOptions } from "./selectOptions";

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
        <button type="submit">Book now</button>
      </div>
    </form>
  );
}
