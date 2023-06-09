export function TicketForm() {
  return (
    <form className="buy-tickets__form">
      <div className="buy-tickets__types">
        <h3 className="buy-tickets__types-title">Ticket Type</h3>
        <div className="buy-tickets__types-item">
          <input
            className="buy-tickets__types-input"
            type="radio"
            id="permanent"
            name="ticket_type"
          ></input>
          <label
            className="buy-tickets__types-label"
            htmlFor="permanent"
          >
            Permanent Exhibition
          </label>
        </div>
        <div className="buy-tickets__types-item">
          <input
            className="buy-tickets__types-input"
            type="radio"
            id="temporary"
            name="ticket_type"
          ></input>
          <label
            className="buy-tickets__types-label"
            htmlFor="temporary"
          >
            Temporary Exhibition
          </label>
        </div>
        <div className="buy-tickets__types-item">
          <input
            className="buy-tickets__types-input"
            type="radio"
            id="combined"
            name="ticket_type"
          ></input>
          <label
            className="buy-tickets__types-label"
            htmlFor="combined"
          >
            Combined Admission
          </label>
        </div>
      </div>
      <div className="buy-tickets__amount">
        <h3 className="buy-tickets__amount-title">Amount</h3>
        <div className="buy-tickets__amount-basic">
          <h4 className="buy-tickets__amount-subtitle">Basic 18+</h4>
          <div className="buy-tickets__amount-controls">
            <button className="buy-tickets__amount-controls-btn">–</button>
            <span className="buy-tickets__amount-value">1</span>
            <button className="buy-tickets__amount-controls-btn">+</button>
          </div>
        </div>
        <div className="buy-tickets__amount-senior">
          <h4 className="buy-tickets__amount-subtitle">Senior 65+</h4>
          <div className="buy-tickets__amount-controls">
            <button className="buy-tickets__amount-controls-btn">–</button>
            <span className="buy-tickets__amount-value">1</span>
            <button className="buy-tickets__amount-controls-btn">+</button>
          </div>
        </div>
        <p className="buy-tickets__amount-total">Total €{0}</p>
        <button
          className="buy-tickets__button"
          type="submit"
        >
          Buy Now
        </button>
      </div>
    </form>
  );
}
