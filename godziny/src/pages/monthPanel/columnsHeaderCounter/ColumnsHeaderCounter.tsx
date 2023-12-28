import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import "./_columnsHeaderCounter.scss";

type Props = {
  counter: any;
  text: string;
};

const ColumnsHeaderCounter = (props: Props) => {
  const { month } = useSelector((state: RootState) => state.monthPanel);
  const [counter, setCounter] = useState<number[]>([props.counter]);

  const didMountRef = useRef(true);
  const counterRef = useRef<number[]>();

  useEffect(() => {
    counterRef.current = counter;
    if (
      counterRef.current &&
      counterRef.current.length > 0 &&
      counterRef.current[counterRef.current.length - 1] === 0
    ) {
      didMountRef.current = true;
    }
  }, [counter]);

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
    <div className="columnsHeaderCounter">
      <div
        style={{
          transform: `translateY(-${(counter.length - 1) * 20}px)`,
          transition: "transform 0.3s ease",
        }}
      >
        {counter.map((item, idx) => {
          return (
            <div
              key={idx}
              style={{
                height: "20px",
                marginLeft: "3px",
              }}
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ColumnsHeaderCounter;
