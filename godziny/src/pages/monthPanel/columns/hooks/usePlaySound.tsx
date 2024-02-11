import React, { useEffect, useRef } from "react";

export const playClickSound = (
  e: any,
  audioElem: React.RefObject<HTMLAudioElement>
) => {
  // const audio = audioElem.current;
  // if (audio) {
  //   audio.volume = window.innerWidth <= 650 ? 0.8 : 0.05;
  //   audio.play();
  // }

  if (
    e.source.droppableId !== "rejected" &&
    e.source.droppableId !== e.destination?.droppableId
  ) {
    const audio = audioElem.current;
    if (audio) {
       audio.volume = window.innerWidth <= 650 ? 0.8 : 0.05;
      audio.play();
    }
  }
};

const usePlaySound = (
  audioElem: React.RefObject<HTMLAudioElement>,
  columnLenght: any,
  monthId: string | undefined,
  event: any
) => {
  const didMountRef = useRef(false);

  useEffect(() => {
    didMountRef.current = false;
  }, [monthId]);

  useEffect(() => {
    if (didMountRef.current) {
      playClickSound(event, audioElem);
    } else {
      didMountRef.current = true;
    }
  }, [event]);

  // useEffect(() => {
  //   didMountRef.current = false;
  // }, [monthId]);
};

export default usePlaySound;
