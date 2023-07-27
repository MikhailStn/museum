import "./buyTickets.css";
import { TicketForm } from "./ticketForm";

export function BuyTickets() {
  return (
    <div className="buy-tickets__container" id="buy_ticket">
      <section className="buy-tickets">
        <h2 className="buy-tickets__title">buy tickets</h2>
        <div className="buy-tickets__content">
          <div
            className="buy-tickets__logo"
          ></div>
          <TicketForm />
        </div>
      </section>
    </div>
  );
}
