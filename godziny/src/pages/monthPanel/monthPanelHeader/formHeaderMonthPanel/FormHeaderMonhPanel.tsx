import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Spinner from "react-bootstrap/Spinner";
import { AiOutlinePlusCircle } from "react-icons/ai";
import useFormHeaderMonhPanel from "./useFormHeaderMonthPanel";
import React, { useState } from "react";
import "./_formHeaderMonthPAnel.scss";

const FormHeaderMonhPanel = () => {
  const { formik, success } = useFormHeaderMonhPanel();

  let btnContent = (
    <div className={formik.values.allHours === 0 ? "text-danger" : ""}>
      Zapisz liczbę godzin
    </div>
  );

  if (success.isLoading) {
    btnContent = (
      <Spinner animation="border" size="sm" variant="secondary">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  if (success.isError) {
    btnContent = <div> "Błąd" </div>;
  }

  return (
    <>
      <Form onSubmit={formik.handleSubmit} className="">
        <Form.Group className="my-1">
          <div className="text-center fw-medium">{formik.values.allHours}</div>
          <div className="d-flex align-items-center w-100">
            <div className="fw-medium">0</div>
            <Form.Range
              name="allHours"
              min={0}
              max={320}
              value={formik.values.allHours}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="form-range custom-range mx-2 medium"
              style={{
                height: 10,
                background: `linear-gradient(to right, olive 0%, red ${formik.values.allHours}%, transparent ${formik.values.allHours}%, transparent 100%)`,
              }}
            />
            <div className="fw-medium">320</div>
          </div>
          <div className="text-center">
            <Button
              type="submit"
              variant="info"
              size="sm"
              className="fw-medium mx-auto"
            >
              {btnContent}
            </Button>
          </div>
        </Form.Group>
      </Form>
    </>
  );
};

export default FormHeaderMonhPanel;
