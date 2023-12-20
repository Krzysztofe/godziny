import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { database } from "../data/firebaseConfig";

const useDatabaseListMonths = () => {
  const nestedRef = ref(database);
  const [isError, setError] = useState("");
  const [databaseKeysYears, setDatabaseKeysYears] = useState<any>([]);

  useEffect(() => {
    const unsubscribe = onValue(
      nestedRef,
      snapshot => {
        let keysYears: string[] = [];
        let monthsCollection: any = [];

        snapshot?.forEach((firstLevelSnapshot: any) => {
          const firstLevelKey = firstLevelSnapshot.key;
          keysYears.push(firstLevelKey);

          const nestedKeysRef = ref(database, `${firstLevelKey}`);
          onValue(
            nestedKeysRef,
            nestedSnapshot => {
              let keysMonths: string[] = [];

              nestedSnapshot?.forEach((nestedKeySnapshot: any) => {
                const nestedKey = nestedKeySnapshot.key;
                keysMonths.push(nestedKey.slice(6));
                console.log("Nested Key:", nestedKey);
              });

              monthsCollection.push(keysMonths);
            },

            nestedError => {
              console.error("Error fetching nested keys:", nestedError);
            }
          );
        });

        const hh = [...monthsCollection]
          .map((monthsInYear, idx) => {
            return monthsInYear.map((month: any) => {
              return keysYears[idx] + "-" + month;
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
