import "./overview.css";

export function Overview() {
  return (
    <div className="overview">
      <h2 className="overview__title">Overview</h2>
      <h3 className="overview__subtitle">Tour to Louvre</h3>
      <div className="overview__date">Friday, August 19</div>
      <div className="overview__time">16 : 30</div>
      <div className="overview__ticket-type">Temporary exhibition</div>
      <div className="overview__basic">
        <p className="overview__basic-num">2</p>
        <p className="overview__basic-sum">Basic (20 €)</p>
        <p className="overview__basic-total">40 €</p>
      </div>
      <div className="overview__senior">
        <p className="overview__senior-num">2</p>
        <p className="overview__senior-sum">Basic (20 €)</p>
        <p className="overview__senior-total">40 €</p>
      </div>
    </div>
  );
}
