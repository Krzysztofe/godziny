import Button from "react-bootstrap/Button";
import { useDeleteDayMutation } from "../../services/apiSliceMonths";
import useHTTPState from "../../hooks/useHTTPState";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useState } from "react";
import Alert from "../../components/alert/Alert";
import useURLValues from "../../hooks/useURLValues";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { ModelDay } from "../../sharedModels/modelDay";
import { calculateUpdatedCalcHours, deleteDayById } from "./columnsDay/utilsClumnsDay";

type Props = {
  day: ModelDay;
  columnIdx: number;
  dayId: string;
};

const ButtonDay = (props: Props) => {
  const { yearFromURL, monthFromURL } = useURLValues();
  const { month } = useSelector((state: RootState) => state.monthPanel);

  const [deleteDay, success] = useDeleteDayMutation();
  const { btnContent } = useHTTPState(
    success,
    <RiDeleteBin6Line className="text-danger" />
  );
  const [columnIdx, setColumnIdx] = useState("");
  const [dayId, setDayId] = useState("");
  const [isAlertPrinted, setIsAlertPrinted] = useState(false);

  const findDay = {
    ...month?.columns[props.columnIdx].days?.find(day => {
      return day?.id === props.day.id;
    }),
  };

  const handleAlert = (idx: string, id: string) => {
    setColumnIdx(idx);
    setDayId(id);
    setIsAlertPrinted(true);
  };

  const deleteDayAsync = async () => {
    if (findDay?.id === dayId) {
      const subtractedHours = findDay?.hours;

      month &&
        (await deleteDay({
          year: yearFromURL,
          month: monthFromURL,
          colIdx: props.columnIdx,
          monthBody: {
            ...month,
            calcHours: calculateUpdatedCalcHours(
              month,
              +columnIdx,
              subtractedHours
            ),

            columns: deleteDayById({ ...month }, dayId).columns,
          },
        }));
    }
  };

  return (
    <>
      <Alert
        action={deleteDayAsync}
        isPrinted={isAlertPrinted}
        setIsPrinted={setIsAlertPrinted}
        header={"Usunąć dzień?"}
      />

      <Button
        onClick={() => handleAlert(props.columnIdx.toString(), props.day.id)}
        className="d-flex justify-content-between  align-items-center w-100 p-0 bg-transparent border-0 fw-medium text-dark"
        disabled={success.isLoading}
      >
        <div>{btnContent}</div>
      </Button>
    </>
  );
};

export default ButtonDay;
