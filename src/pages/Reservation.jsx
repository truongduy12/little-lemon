import { useEffect, useReducer, useState } from "react";
import BookingForm from "../components/BookingForm";
import { fetchAPI } from "../api";

function Reservation() {
  const updateTimes = (state, selectedDate) => {
    return fetchAPI(selectedDate);
  };

  const initializeTimes = fetchAPI(new Date(Date.now()));
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes);
  return (
    <section
      style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)" }}
    >
      <div style={{ gridColumn: "3 / 11" }}>
        <h1>Reservation</h1>
        <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
      </div>
    </section>
  );
}
export default Reservation;
