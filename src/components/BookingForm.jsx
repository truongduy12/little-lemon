import { ErrorMessage, useFormik } from "formik";
import styles from "../styles/booking-form.module.css";
import * as Yup from "yup";
import { useEffect, useState } from "react";
import { submitAPI } from "../api";
import { useNavigate } from "react-router-dom";

function BookingForm({ availableTimes, dispatch }) {
  const nav = useNavigate();
  const formik = useFormik({
    initialValues: {
      date: new Date(Date.now()).toString("yyyy-MM-dd"),
      time: "17:00",
      guests: "",
      occasion: "Birthday",
    },
    validationSchema: Yup.object({
      date: Yup.string().required("This field is required."),
      time: Yup.string().required("This field is required."),
      guests: Yup.number()
        .min(1, "Minimum is 1")
        .max(10, "Maximum is 10")
        .required("This field is required."),
      occasion: Yup.string().required("This field is required."),
    }),
    onSubmit: (values) => {
      const success = submitAPI(values);
      if (success) {
        nav("/confirmed", {
          state: { ...values },
        });
      } else {
        window.alert("Sorry, your booking cannot be made!");
      }
    },
  });
  useEffect(() => {
    dispatch(new Date(formik.values.date));
  }, [formik.values.date]);
  return (
    <form
      onSubmit={formik.handleSubmit}
      style={{ display: "grid", maxWidth: 200, gap: 20 }}
    >
      <label htmlFor="res-date">Choose date</label>
      <input type="date" id="res-date" {...formik.getFieldProps("date")} />
      {formik.errors.date && formik.touched.date ? (
        <span>{formik.errors.date}</span>
      ) : null}
      <label htmlFor="res-time">Choose time</label>
      <select
        data-testid="res-time"
        id="res-time"
        name="time"
        onChange={formik.handleChange}
        value={formik.values.time}
      >
        {availableTimes.map((t) => (
          <option key={t}>{t}</option>
        ))}
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        min={1}
        max={10}
        id="guests"
        {...formik.getFieldProps("guests")}
      />
      {formik.errors.guests && formik.touched.guests ? (
        <span>{formik.errors.guests}</span>
      ) : null}
      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" {...formik.getFieldProps("occasion")}>
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <input
        className="btn-primary"
        type="submit"
        defaultValue="Make Your reservation"
      />
    </form>
  );
}
export default BookingForm;
