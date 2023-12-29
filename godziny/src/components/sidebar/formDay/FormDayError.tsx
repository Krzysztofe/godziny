type Props = {
  dateError: any;
};

const FormDayError = (props: Props) => {
  return (
    <div
      className="text-danger d-block mt-0 fs-8"
      style={{ height: "0.7rem", position: "absolute", bottom: "0px" }}
    >
      {props.dateError}
    </div>
  );
};

export default FormDayError;
