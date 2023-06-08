import { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import DayForm from "./dayForm/DayForm";
import {
  useUpdateColumnsMutation,
  useDeleteAllColumnsMutation,

  useColumnsQuery,
} from "../../services/apiSlice";
import { FaTrashAlt } from "react-icons/fa";
import { addDaysToEmptyColumns } from "./utils";

interface Props {
  day: any;
  index: any;
}

const Day = (props: Props) => {
  const [updateColumns] = useUpdateColumnsMutation();


  const { data, error } = useColumnsQuery(undefined);
  const columnsIdFRomDatabase = data && Object.keys(data).join();
  const columnsFromDatabase = data ? Object.values(data).flat() : [];
  const columnsToPrint = addDaysToEmptyColumns(columnsFromDatabase);

  const updatedColumnsx = data ? [...columnsToPrint] : [];

  const handleUpdate = async (id: any) => {
    const updatedColumnsWithFilteredDay = updatedColumnsx.map((column: any) => {
      if (column && column.days) {
        return {
          ...column,
          days: column.days.filter((day: any) => day.id !== id),
        };
      }
      return column;
    });

    console.log("", columnsIdFRomDatabase);
    await updateColumns({
      id: columnsIdFRomDatabase,
      columns: updatedColumnsWithFilteredDay,
    });
  };

  return (
    <div style={{ border: "1px solid black" }}>
      <Draggable
        draggableId={props.day && props?.day?.id.toString()}
        index={props.index}
      >
        {provided => {
          return (
            <div
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              ref={provided.innerRef}
            >
              <strong>{props.day.content}</strong>

              <DayForm  dayId = {props.day.id}/>

              <button onClick={() => handleUpdate(props.day.id)}>
                <FaTrashAlt />
              </button>
            </div>
          );
        }}
      </Draggable>
    </div>
  );
};

export default Day;
