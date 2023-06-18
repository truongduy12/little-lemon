import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Reservation from "./pages/Reservation";
import ConfirmedBooking from "./pages/ConfirmedBooking";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="reservation" element={<Reservation />} />
          <Route path="confirmed" element={<ConfirmedBooking />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
