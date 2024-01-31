import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import "./_counterHeader.scss";

type Props = {
  counter: any;
  text: string;
};

const CounterHeader = (props: Props) => {
  const { month } = useSelector((state: RootState) => state.monthPanel);
  const [counter, setCounter] = useState<number[]>([props.counter]);
  const didMountRef = useRef(true);

  useEffect(() => {
    setCounter([props.counter]);
    didMountRef.current = false;
  }, [month?.id]);

  useEffect(() => {
    if (didMountRef.current) {
      setCounter(prev => [...prev, props?.counter ?? 0]);
    } else {
      didMountRef.current = true;
    }
  }, [props.counter]);
  

  return (
    <div className="_counterHeader">
      <div
        style={{
          transform: `translateY(-${(counter.length - 1) * 20}px)`,
          transition: "transform 0.3s",
        }}
      >
        {counter.map((item, idx) => {
          return (
            <div key={idx} className="_counterHeader__dygit">
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CounterHeader;
