import { useRef, useState } from "react";

const useScrollThumbPosition = () => {
  const scrollableRef = useRef(null);
  const [thumbPosition, setThumbPosition] = useState(0);

  const handleScroll = () => {
    const element = scrollableRef.current;

    if (element) {
      const { scrollTop, scrollHeight, clientHeight } = element;
      const maxScrollTop = scrollHeight - clientHeight;
      const thumbPosition = (scrollTop / maxScrollTop) * 100;
      setThumbPosition(thumbPosition);
    }
  };

  return { scrollableRef, thumbPosition, handleScroll };
};

export default useScrollThumbPosition;
