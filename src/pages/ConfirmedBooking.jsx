import { useLocation, useNavigate } from "react-router-dom";

function ConfirmedBooking({ values }) {
  const nav = useNavigate();
  const { state } = useLocation();
  return (
    <section
      style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)" }}
    >
      <div style={{ gridColumn: "3 / 11" }}>
        <h1>Confirmed Booking</h1>
        <h3>You have confirmed booking with following data:</h3>
        <ul style={{ margin: "1rem 0" }}>
          {state &&
            Object.entries(state).map((item, index) => (
              <li key={index} style={{ margin: "0.5rem 0" }}>
                {item[0]}: &nbsp;
                <b>{item[1]}</b>
              </li>
            ))}
        </ul>
        <button className="btn-primary" onClick={() => nav("/reservation")}>
          Back to booking page
        </button>
      </div>
    </section>
  );
}
export default ConfirmedBooking;
