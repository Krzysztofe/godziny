import { useEffect, useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import Button from "react-bootstrap/Button";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import useHTTPState from "../../../hooks/useHTTPState";
import useURLValues from "../../../hooks/useURLValues";
import { RootState } from "../../../redux/store";
import {
  agreeAlert,
  closeAlert,
  printAlert,
} from "../../../redux/storeFeatures/alertSlice";
import { useDeleteDayMutation } from "../../../services/apiSliceMonths";
import { ModelDay } from "../../../sharedModels/modelDay";
import MonthPanelDayPrintData from "../MonthPanelDayPrintData";
import { calculateUpdatedCalcHours, deleteDayById } from "./utilsMonthPanelDay";

interface Props {
  day: ModelDay;
  columnIdx: number;
  dayIdx: number;
}

const MonthPanelDay = (props: Props) => {
  const dispatch = useDispatch();
  const { yearFromURL, monthFromURL } = useURLValues();
  const { month } = useSelector((state: RootState) => state.monthPanel);
  const [deleteDay, success] = useDeleteDayMutation();
  const { btnContent } = useHTTPState(
    success,
    <RiDeleteBin6Line className="text-danger" />
  );
  const { agree } = useSelector((state: RootState) => state.alert);
  const [columnIdx, setColumnIdx] = useState("");
  const [dayId, setDayId] = useState("");

 ;

  const findDeletedDayId = {
    ...month?.columns[props.columnIdx].days?.find(day => {
      return day?.id === props.day.id;
    }),
  }.id;

  const handleAlert = (idx: string, id: string) => {
    setColumnIdx(idx);
    setDayId(id);
    dispatch(printAlert("Usunąć dzień?"));
  };

  const deleteDayAsync = async () => {
    if (agree && findDeletedDayId === dayId) {
      const subtractedHours = {
        ...month?.columns[props.columnIdx].days?.find(day => {
          return day?.id === props.day.id;
        }),
      }?.hours;

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

  useEffect(() => {
    deleteDayAsync();
    dispatch(agreeAlert(false));
    dispatch(closeAlert());
  }, [agree]);

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
            <div
              className="px-1 py-2 py-sm-1 rounded"
              style={{
                borderTop: `8px solid ${props.day?.userColor}`,
                opacity: snapshot.isDragging ? 0.8 : 1,
              }}
            >
              <MonthPanelDayPrintData day={props.day} />

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

export default MonthPanelDay;
