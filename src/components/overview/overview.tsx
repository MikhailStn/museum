import "./overview.css";
import { RootState } from "../../types/rootState";
import { useSelector } from "react-redux";
import { date } from "../../store/ticketsReducer";
import { time } from "../../store/ticketsReducer";

export function Overview() {
  const state = useSelector((state: RootState) => state.ticketReducer);

  return (
    <div className="overview">
      <h2 className="overview__title">Overview</h2>
      <h3 className="overview__subtitle">Tour to Louvre</h3>
      <div className="overview__date">{state.date == "" ? date : state.date}</div>
      <div className="overview__time">{state.time == "" ? time : state.time}</div>
      <div className="overview__ticket-type">{state.ticketType}</div>
      <div className="overview__basic">
        <p className="overview__basic-num">{state.basicNum}</p>
        <p className="overview__basic-sum">
          Basic (
          {state.ticketType == "Permanent Exhibition"
            ? 20
            : false || state.ticketType == "Temporary Exhibition"
            ? 30
            : false || state.ticketType == "Combined Admission"
            ? 40
            : false}{" "}
          €)
        </p>
        <p className="overview__basic-total">{state.basicSum} €</p>
      </div>
      <div className="overview__senior">
        <p className="overview__senior-num">{state.seniorNum}</p>
        <p className="overview__senior-sum">
          Senior (
          {state.ticketType == "Permanent Exhibition"
            ? 10
            : false || state.ticketType == "Temporary Exhibition"
            ? 15
            : false || state.ticketType == "Combined Admission"
            ? 20
            : false}{" "}
          €)
        </p>
        <p className="overview__senior-total">{state.seniorSum} €</p>
      </div>
    </div>
  );
}
