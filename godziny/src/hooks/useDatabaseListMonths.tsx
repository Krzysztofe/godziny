import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { database } from "../data/firebaseConfig";

const useDatabaseListMonths = () => {
  const nestedRef = ref(database, "years");
  const [isError, setError] = useState("");
  const [databaseKeysYears, setDatabaseKeysYears] = useState<any>([]);

  useEffect(() => {
    const unsubscribe = onValue(
      nestedRef,
      snapshot => {
        let keysYears: any = [];
        let keysMonths: any = [];
        snapshot?.forEach((secondLevelSnapshot: any) => {
          const secondLevelKey = secondLevelSnapshot.key;
          const secondLevelData = secondLevelSnapshot.val();
          keysYears.push(secondLevelKey);
          keysMonths.push(Object.keys(secondLevelData));
        });

        const hh = [...keysMonths]
          .map((year, idx) => {
            return year.map((month: any) => {
              return keysYears[idx] + "-" + month.slice(6);
            });
          })
          .flat()
          .reverse();

        setDatabaseKeysYears(hh);
      },
      error => {
        setError("error");
        console.error("Error fetching data:", error);
      }
    );

    return () => {
      unsubscribe();
    };
  }, []);

  return {
    databaseKeysYears,
    isError,
  };
};

export default useDatabaseListMonths;
