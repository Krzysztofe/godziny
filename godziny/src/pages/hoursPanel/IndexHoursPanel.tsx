import { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import Column from "./Column";

interface Item {
  id: number;
  content: string;
}

interface Column {
  name: string;
  items: Item[];
}

const itemsFromBack = [
  { id: 1, content: "jeden" },
  { id: 2, content: "dwa" },
  { id: 3, content: "trzy" },
];

const columnsFromBack: { [key: number]: Column } = {
  [1]: {
    name: "miesiąc",
    items: itemsFromBack,
  },
  [2]: {
    name: "oczekujące",
    items: [],
  },
  [3]: {
    name: "zatwierdzone",
    items: [],
  },
};

const IndexHoursPanel = () => {
  const [columns, setColumns] = useState(columnsFromBack);

  const handleDragDrop = (result: any) => {
    const { source, destination } = result;

    if (!result.destination) return;

    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);

      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems,
        },
      });
    } else {
      const column = columns[source.droppableId];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: { ...column, items: copiedItems },
      });
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <DragDropContext onDragEnd={handleDragDrop}>
        {Object.entries(columns).map(([id, column]) => {
          return <Column id={id} column={column} key={id} />;
        })}
      </DragDropContext>
    </div>
  );
};

export default IndexHoursPanel;
