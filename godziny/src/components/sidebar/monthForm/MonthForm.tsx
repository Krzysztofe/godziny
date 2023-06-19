import React, { useState } from "react";
import { monthPattern } from "./dataMonthForm";
import { useAddMonthMutation } from "../../../services/apiSlice";
import { FcApproval } from "react-icons/fc";
import { Spinner } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../../data/firebaseConfig";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import useMonthForm from "./useMonthForm";

const MonthForm = () => {
  const { formik, success } = useMonthForm();

  let btnContent = <FcApproval />;

  if (success.isLoading) {
    btnContent = (
      <Spinner animation="border" size="sm" variant="secondary">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  if (success.isError) {
    btnContent = <span> "Błąd" </span>;
  }

  return (
    <>
      <Form onSubmit={formik.handleSubmit} className="">
        <Form.Group className="d-flex">
          <Form.Control
            type="month"
            name="monthYear"
            min="2023-06"
            max="2025-12"
            value={formik.values.monthYear}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            size="sm"
            className="rounded-0"
          />

          <Button
            type="submit"
            variant="secondary"
            className="rounded-0"
            size="sm"
          >
            {btnContent}
          </Button>

          {/* <Form.Text
          className="text-danger py-1"
          style={{ fontSize: "0.7rem" }}
        >uuuu</Form.Text> */}
        </Form.Group>
      </Form>
    </>
  );
};

export default MonthForm;
