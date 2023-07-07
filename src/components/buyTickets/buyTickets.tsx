import "./buyTickets.css";
import ticketsLogo from "../../../public/images/tickets_img.jpg";
import { TicketForm } from "./ticketForm";

export function BuyTickets() {
  return (
    <div className="buy-tickets__container">
      <section className="buy-tickets">
        <h2 className="buy-tickets__title">buy tickets</h2>
        <div className="buy-tickets__content">
          <img
            className="buy-tickets__logo"
            src={ticketsLogo}
          ></img>
          <TicketForm />
        </div>
      </section>
    </div>
  );
}
