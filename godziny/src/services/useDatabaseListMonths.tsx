import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { database } from "../data/firebaseConfig";

const useDatabaseListMonths = () => {
  const reference = ref(database);
  const [error, setError] = useState("");
  const [databaseListMonths, setDatabaseListMonths] = useState<any>([]);

  useEffect(() => {
    const unsubscribe = onValue(
      reference,
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
              });

              monthsCollection.push(keysMonths);
            },

            nestedError => {
               setError("Błąd. Odśwież stronę");
            }
          );
        });

        const months = [...monthsCollection]
          .map((monthsInYear, idx) => {
            return monthsInYear.map((month: any) => {
              return keysYears[idx] + "-" + month;
            });
          })
          .flat()
          .reverse();

        setDatabaseListMonths(months);
      },
      error => {
        setError("Błąd. Odśwież stronę");
      }
    );

    return () => {
      unsubscribe();
    };
  }, []);


  return {
    databaseListMonths,
    error,
  };
};

export default useDatabaseListMonths;
