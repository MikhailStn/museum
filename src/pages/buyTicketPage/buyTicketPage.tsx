import "./buyTicketPage.css";
import { useNavigate } from "react-router-dom";
import { BuyTicketForm } from "../../components/buyTicketForm/buyTicketForm";
import logo from "../../../public/icons/logo_gold.png";

export function BuyTicketPage() {
  const navigate = useNavigate();
  return (
    <div className="wrapper">
      <header className="buy-ticket__header">
        <button
          className="buy-ticket__header-btn"
          onClick={(e) => {
            e.preventDefault();
            navigate(-1);
          }}
        >
          ← Back
        </button>
        <div className="buy-ticket__logo">
          <img className="buy-ticket__logo-image" src={logo} alt="logo"></img>
          <h1 className="buy-ticket__logo__title">booking tickets</h1>
        </div>
        <p className="buy-ticket__logo__subtitle">Tour to Louvre</p>
      </header>
      <BuyTicketForm />
    </div>
  );
}
