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
import { AiOutlinePlusCircle } from "react-icons/ai";

const FormHeaderMonhPanel = () => {
  const { formik, success } = useFormHeaderMonhPanel();

  let btnContent = (
    <AiOutlinePlusCircle style={{ fontSize: "2rem" }} />
  );

  if (success.isLoading) {
    btnContent = (
      <Spinner animation="border"  variant="secondary">
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
        <Form.Group
          className="d-flex align-items-end my-3"
          style={{ height: "2rem" }}
        >
          <Form.Label htmlFor="allHours" className="mb-0">
            Podaj ilość godzin
          </Form.Label>
          <div className="align-self-start">
            <Form.Control
              id="allHours"
              type="number"
              name="allHours"
              min={1}
              value={formik.values.allHours}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              size="sm"
              className="rounded-0 ms-2"
              style={{ width: "4rem" }}
            />
            <Form.Text
              className="text-danger d-block mt-0 mb-1 lh-0 ms-2"
              style={{ fontSize: "0.7rem", height: "1rem" }}
            >
              {formik.touched.allHours &&
                formik.errors.allHours &&
                formik.errors.allHours}
            </Form.Text>
          </div>
          <Button
            type="submit"
            variant="secondary"
            className="rounded-0 d-flex align-items-center justify-content-center px-0  bg-transparent  text-dark border-0"
            style={{ width: "10%", height: "100%" }}
          >
            {btnContent}
          </Button>
        </Form.Group>
      </Form>
    </>
  );
};

export default FormHeaderMonhPanel;
