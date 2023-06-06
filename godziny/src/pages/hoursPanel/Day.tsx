import { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import TextInput from "../../data/inputs/TextInput";
interface Props {
  day: any;
  index: any;
}

const Day = (props: Props) => {
  const [userData, setUserData] = useState({ hours: "", userName: "" });

  const handleInputChange = () => {
    return;
  };

  return (
    <div style={{ border: "1px solid black" }}>
      <Draggable
        draggableId={props.day && props.day.id.toString()}
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
              <TextInput
                type="number"
                name="hours"
                value={userData.hours}
                label="Godz."
                placeholder="Godz."
                handleChange={handleInputChange}
              />
              <TextInput
                type="text"
                name="userName"
                value={userData.userName}
                label="Imię"
                placeholder="Imię"
                handleChange={handleInputChange}
              />
            </div>
          );
        }}
      </Draggable>
    </div>
  );
};

export default Day;
