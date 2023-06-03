import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useState } from "react";

interface Item {
  id: number;
  content: string;
}

const itemsFromBack = [
  { id: 1, content: "jeden" },
  { id: 2, content: "dwa" },
  { id: 3, content: "trzy" },
];

interface Column {
  name: string;
  items: Item[];
}

const columnsFromBack: { [key: string]: Column } = {
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

const Hours = () => {
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
          return (
            <Droppable droppableId={id.toString()} key={id}>
              {(provided, snapshot) => {
                return (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    style={{
                      border: "1px solid black",
                      width: 100,
                      height: "50vh",
                    }}
                  >
                    <h4>{column.name} </h4>
                    {column.items.map((item: any, index: any) => {
                      return (
                        <Draggable
                          key={item.id}
                          draggableId={item.id.toString()}
                          index={index}
                        >
                          {provided => {
                            return (
                              <div
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                ref={provided.innerRef}
                              >
                                {item.content}
                              </div>
                            );
                          }}
                        </Draggable>
                      );
                    })}
                    {provided.placeholder}
                  </div>
                );
              }}
            </Droppable>
          );
        })}
      </DragDropContext>
    </div>
  );
};

export default Hours;
