import { Draggable } from "react-beautiful-dnd";
import Button from "react-bootstrap/Button";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import useHTTPState from "../../hooks/useHTTPState";
import useURLValues from "../../hooks/useURLValues";
import { RootState } from "../../redux/store";
import { useDeleteDayMutation } from "../../services/apiSliceMonths";
import { alertHelper } from "../../utils/alertHelpers";
import MonthPanelDayPrintData from "./MonthPanelDayPrintData";
import { ModelDay } from "../../sharedModels/modelDay";
import { ModelColumn } from "../../sharedModels/modelColumn";
import { ModelMonth } from "../../sharedModels/modelMonth";

interface Props {
  day: ModelDay;
  columnIdx: number;
  dayIdx: number;
}

const MonthPanelDay = (props: Props) => {
  const { yearFromURL, monthFromURL } = useURLValues();
  const { month } = useSelector((state: RootState) => state.monthsPanel);
  const [deleteDay, success] = useDeleteDayMutation();
  const { btnContent } = useHTTPState(
    success,
    <RiDeleteBin6Line className="text-danger" />
  );

  const handleDelete = async (idx: number, id: string) => {
    Swal.fire(alertHelper("Usunąć dzień")).then(async result => {
      if (result.isConfirmed) {
        const deleteDayById = (obj: ModelMonth, idToDelete: string) => {
          const updatedColumns = obj?.columns?.map((column: ModelColumn) => {
            const updatedDays = column?.days?.filter(
              (day) => day.id !== idToDelete
            );
            return { ...column, days: updatedDays };
          });

          return { ...obj, columns: updatedColumns };
        };

        const subtractedHours = {
          ...month?.columns[props.columnIdx].days.find((day) => {
            return day?.id === props.day.id;
          }),
        }?.hours;

        await deleteDay({
          year: yearFromURL,
          month: monthFromURL,
          colIdx: props.columnIdx,
          monthBody: {
            ...month,
            calcHours: {
              ...month.calcHours,
          

              currentHours:
                props.columnIdx !== 2 && subtractedHours
                  ? month.calcHours.currentHours + subtractedHours
                  : month.calcHours.currentHours,
              submittedHours:
                props.columnIdx === 0 && subtractedHours
                  ? month.calcHours.submittedHours - subtractedHours
                  : month.calcHours.submittedHours,
              acceptedHours:
                props.columnIdx === 1 && subtractedHours
                  ? month.calcHours.acceptedHours - subtractedHours
                  : month.calcHours.acceptedHours,
              rejectedHours:
                props.columnIdx === 2 && subtractedHours
                  ? month.calcHours.rejectedHours - subtractedHours
                  : month.calcHours.rejectedHours,
            },
            columns: deleteDayById({ ...month }, id).columns,
          },
        });
      }
    });
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
            <div
              className="px-1 py-2 py-sm-1 rounded"
              style={{
                borderTop: `8px solid ${props.day?.userColor}`,
                opacity: snapshot.isDragging ? 0.8 : 1,
              }}
            >
              <MonthPanelDayPrintData day={props.day} />

              <Button
                onClick={() => handleDelete(props.columnIdx, props.day.id)}
                className="d-flex justify-content-between  align-items-center w-100 p-0 bg-transparent border-0"
                disabled={success.isLoading}
              >
                <div>{props.day?.hours} h</div>
                <div className="">{btnContent}</div>
              </Button>
            </div>
          </div>
        );
      }}
    </Draggable>
  );
};

export default MonthPanelDay;
