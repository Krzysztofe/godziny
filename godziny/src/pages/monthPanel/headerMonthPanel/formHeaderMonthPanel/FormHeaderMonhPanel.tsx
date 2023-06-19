import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import TextInput from "../../../../components/inputs/TextInput";
import { handleChange } from "../../../../redux/storeFeatures/hoursPanelSlice";
import { useUpdateColumnsMutation } from "../../../../services/apiSlice";
import { useParams } from "react-router-dom";
import useDataBaseValues from "../../useDataBaseValues";
import { FcApproval } from "react-icons/fc";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import useFormHeaderMonhPanel from "./useFormHeaderMonthPanel";

const FormHeaderMonhPanel = () => {
  const { formik, success } = useFormHeaderMonhPanel();

  let btnContent = <FcApproval />;

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
        <Form.Group className="">
          <Form.Control
            type="number"
            name="allHours"
            min={1}
            value={formik.values.allHours}
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

          <Form.Text
            className="text-danger d-block mt-0 mb-1 lh-0"
            style={{ fontSize: "0.7rem", height: "1rem" }}
          >
            {formik.touched.allHours &&
              formik.errors.allHours &&
              formik.errors.allHours}
          </Form.Text>
        </Form.Group>
      </Form>
    </>
  );
};

export default FormHeaderMonhPanel;
