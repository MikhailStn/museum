import { useNavigate } from "react-router-dom";

export function BuyTicketPage() {
  const navigate = useNavigate();
  return (
    <div className="wrapper">
      <h1>Buy Ticket</h1>
      <button
        onClick={(event) => {
          event.preventDefault();
          navigate(-1);
        }}
      >
        ← Back
      </button>
    </div>
  );
}
