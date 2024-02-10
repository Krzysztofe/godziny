import { DropResult } from "react-beautiful-dnd";

export const playClickSound = (
  e: DropResult,
  audioElem: React.RefObject<HTMLAudioElement>
) => {
  if (
    e.source.droppableId !== "rejected" &&
    e.source.droppableId !== e.destination?.droppableId
  ) {
    const audio = audioElem.current;
    if (audio) {
      audio.volume = 0.05;
      audio.play();
    }
  }
};
