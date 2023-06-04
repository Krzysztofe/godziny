import { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import Column from "./Column";
import { useAddReactionMutation } from "../../services/apiSlice";
import { handleDragDrop } from "./utils";
import HeaderInPanel from "./HeaderInPanel";

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

  const getRangeOfDays = (num: number) => {
    let days = [];

    for (let i = 1; i <= num; i++) {
      days.push({ id: i, hours: 0, name: "" });
    }

    return days;
  };
  const days = getRangeOfDays(15);

  console.log("", days);

  const [addReaction, success] = useAddReactionMutation();

  const dataToSend = {
    [1]: {
      name: "miesiąc",
      items: days,
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

  const handleClick = async () => {
    await addReaction(dataToSend);
  };

  return (
    <>
      <HeaderInPanel />

      <div style={{ display: "flex" }}>
        <DragDropContext
          onDragEnd={result => handleDragDrop(result, columns, setColumns)}
        >
          {Object.entries(columns).map(([id, column]) => {
            return <Column id={id} column={column} key={id} />;
          })}
        </DragDropContext>
        <button onClick={handleClick}> add</button>
      </div>
    </>
  );
};

export default IndexHoursPanel;
