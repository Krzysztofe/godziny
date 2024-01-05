import { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import Button from "react-bootstrap/Button";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useSelector } from "react-redux";
import Alert from "../../../components/alert/Alert";
import useHTTPState from "../../../hooks/useHTTPState";
import useURLValues from "../../../hooks/useURLValues";
import { RootState } from "../../../redux/store";
import { useDeleteDayMutation } from "../../../services/apiSliceMonths";
import { ModelDay } from "../../../sharedModels/modelDay";
import DayPrintData from "../DayPrintData";
import { calculateUpdatedCalcHours, deleteDayById } from "./utilsClumnsDay";
import ButtonDay from "../ButtonDay";

interface Props {
  day: ModelDay;
  columnIdx: number;
  dayIdx: number;
}

const ColumnsDay = (props: Props) => {
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
    <Draggable
      draggableId={props.day && props?.day?.id}
      index={props.dayIdx}
      isDragDisabled={false}
    >
      {(provided, snapshot) => {
        return (
          <div
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            className={`mb-2 bg-white rounded border ${
              snapshot.isDragging ? "border-dark" : "border-dark-subtle"
            } `}
          >
            <Alert
              action={deleteDayAsync}
              isPrinted={isAlertPrinted}
              setIsPrinted={setIsAlertPrinted}
              header={"Usunąć dzień?"}
            />
            <div
              className="px-1 py-2 py-sm-1 rounded"
              style={{
                borderTop: `8px solid ${props.day?.userColor}`,
                opacity: snapshot.isDragging ? 0.8 : 1,
              }}
            >
              <DayPrintData day={props.day} />

              {/* <ButtonDay
                columnIdx={props.columnIdx}
                dayId={props.day.id}
                day={props.day}
              /> */}

              <Button
                onClick={() =>
                  handleAlert(props.columnIdx.toString(), props.day.id)
                }
                className="d-flex justify-content-between  align-items-center w-100 p-0 bg-transparent border-0 fw-medium text-dark"
                disabled={success.isLoading}
              >
                <div>{props.day?.hours} h</div>
                <div>{btnContent}</div>
              </Button>
            </div>
          </div>
        );
      }}
    </Draggable>
  );
};

export default ColumnsDay;
