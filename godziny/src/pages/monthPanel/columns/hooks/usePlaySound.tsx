import React, { useEffect, useRef } from "react";

export const playClickSound = (
  audioElem: React.RefObject<HTMLAudioElement>
) => {
  const audio = audioElem.current;
  if (audio) {
    audio.volume = window.innerWidth <= 650 ? 0.5 : 0.05;
    audio.play();
  }
};

const usePlaySound = (
  audioElem: React.RefObject<HTMLAudioElement>,
  columnLenght: number,
  monthId: string | undefined
) => {
  const didMountRef = useRef(false);

  useEffect(() => {
    if (didMountRef.current) {
      playClickSound(audioElem);
    } else {
      didMountRef.current = true;
    }
  }, [columnLenght]);

  useEffect(() => {
    didMountRef.current = false;
  }, [monthId]);
};

export default usePlaySound;
