import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import "./_counter.scss";

type Props = {
  counter: number;
};

const Counter = (props: Props) => {
  const { month } = useSelector((state: RootState) => state.monthPanel);
  const [counter, setCounter] = useState<number[]>([props.counter]);


  const didMountRef = useRef(false);


  useEffect(() => {
    setCounter([props.counter]);
          didMountRef.current = false;
  }, [month?.id]);

  useEffect(() => {
    if (didMountRef.current) {
      setCounter(prev => [...prev, props.counter]);
    } else {
      didMountRef.current = true;
    }
  }, [props.counter]);



  return (
    <div className="counter">
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

export default Counter;

// const Counter = (props: Props) => {
//   const { pathname } = useLocation();
//   const [counter, setCounter] = useState<number[]>([]);
//     const { month } = useSelector((state: RootState) => state.monthPanel);
//   console.log("", props.counter);

//   console.log("pierwszy", counter);

//   useEffect(() => {
//     setCounter([props.counter]);
//   }, [month?.id]);

//   return <CounterDisplay counter={counter} />;
// };

// const CounterDisplay = ({ counter }: { counter: number[] }) => {
//   const [displayedCounter, setDisplayedCounter] = useState<number[]>(counter);
//   const didMountRef = useRef(false);

//   console.log("drugi", displayedCounter);

//   useEffect(() => {
//     setDisplayedCounter(counter);
//   }, [counter]);

//     useEffect(() => {
//       if (didMountRef.current) {
//         setDisplayedCounter(prev => [...prev,...counter]);
//       } else {
//         didMountRef.current = true;
//       }
//     }, [counter]);

//     console.log("hhh", counter);

//   return (
//     <div className="counter">
//       <div
//         style={{
//           transform: `translateY(-${(displayedCounter.length - 1) * 20}px)`,
//           transition: "transform 0.3s ease",
//         }}
//       >
//         {" "}
//         {displayedCounter.map((item, idx) => (
//           <div key={idx} style={{ height: "20px", marginLeft: "3px" }}>
//             {item}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Counter;
