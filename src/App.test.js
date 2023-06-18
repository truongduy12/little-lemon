import { render, screen } from "@testing-library/react";
import App from "./App";
import Reservation from "./pages/Reservation";
import BookingForm from "./components/BookingForm";

// test("renders learn react link", () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test("Render reservation heading", () => {
  render(<Reservation />);
  const headingElement = screen.getByText("Reservation");
  expect(headingElement).toBeInTheDocument();
});

test("Form inside reservation", () => {
  render(<Reservation />);
  const label = screen.getByLabelText("Choose date");
  expect(label).toBeInTheDocument();
});

test("updateTimes function", () => {
  render(<Reservation />);
  const selectBox = screen.getByTestId("res-time");
  expect(selectBox).toHaveTextContent("17:00");
  expect(selectBox).toHaveTextContent("18:00");

  // Assert that the default selected value is "option 1"
  // expect(selectBox.value).toBe("option 1");
});
