import "./buyTicketPage.css";
import { useNavigate } from "react-router-dom";
import { BuyTicketForm } from "../../components/buyTicketForm/buyTicketForm";
import logo from "../../../public/icons/logo_gold.png";
import { Link } from "react-router-dom";

export function BuyTicketPage() {
  const navigate = useNavigate();
  return (
    <div className="buy-ticket__wrapper">
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
        <div
          className="buy-ticket__logo"
          onClick={(e) => {
            e.preventDefault();
            navigate(-1);
          }}
        >
          <img className="buy-ticket__logo-image" src={logo} alt="logo"></img>
          <Link className="buy-ticket__logo-title" to="#">
            booking tickets
          </Link>
        </div>
        <p className="buy-ticket__logo-subtitle">Tour to Louvre</p>
      </header>
      <BuyTicketForm />
    </div>
  );
}
