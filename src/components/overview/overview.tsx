import "./overview.css";
import { RootState } from "../../types/rootState";
import { /* useDispatch, */ useSelector } from "react-redux";

export function Overview() {
  // const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state.ticketReducer);

  return (
    <div className="overview">
      <h2 className="overview__title">Overview</h2>
      <h3 className="overview__subtitle">Tour to Louvre</h3>
      <div className="overview__date">{state.date}</div>
      <div className="overview__time">{state.time}</div>
      <div className="overview__ticket-type">{state.ticketType}</div>
      <div className="overview__basic">
        <p className="overview__basic-num">{state.basicNum}</p>
        <p className="overview__basic-sum">Basic (20 €)</p>
        <p className="overview__basic-total">40 €</p>
      </div>
      <div className="overview__senior">
        <p className="overview__senior-num">{state.seniorNum}</p>
        <p className="overview__senior-sum">Senior (10 €)</p>
        <p className="overview__senior-total">40 €</p>
      </div>
    </div>
  );
}
