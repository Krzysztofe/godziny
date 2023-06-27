import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useDataBaseValues from "../useDataBaseValues";
import { BsFillSendFill } from "react-icons/bs";
import { FaThumbsUp } from "react-icons/fa";
import { FaThumbsDown } from "react-icons/fa";

const HeaderColumns = () => {
  const { monthURL } = useParams();
  const {
    databaseAcceptedHours,
    databaseRejectedHours,
    dataBaseSubmitedHours,
  } = useDataBaseValues(monthURL);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const displayHeaderContent = windowWidth > 576;

  return (
    <div className="d-flex grid gap-0 column-gap-2">
      {[
        {
          headerText: "Złożone:",
          headerIcon: <BsFillSendFill />,
          counter: dataBaseSubmitedHours,
        },
        {
          headerText: "Przyjęte:",
          headerIcon: <FaThumbsUp />,
          counter: databaseAcceptedHours,
        },
        {
          headerText: "Odrzucone:",
          headerIcon: <FaThumbsDown className="secondary" />,
          counter: databaseRejectedHours,
        },
      ].map(({ headerText, counter, headerIcon }) => {
        return (
          <div
            key={headerText}
            className=" mb-0 p-1 bg-secondary-subtle text-dark-emphasis fw-medium fs-6"
            style={{ width: "100%" }}
          >
            {displayHeaderContent ? (
              <>
                {headerText} {counter}
              </>
            ) : (
              <>
                {headerIcon} {counter}{" "}
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default HeaderColumns;
