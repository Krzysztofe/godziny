import {
  onValue,
  ref,
  DataSnapshot,
  DatabaseReference,
} from "firebase/database";
import { useEffect, useState } from "react";
import { database } from "../data/firebaseConfig";

const useDatabaseListMonths = () => {
  const reference: DatabaseReference = ref(database);
  const [error, setError] = useState<string>("");
  const [databaseListMonths, setDatabaseListMonths] = useState<string[]>([]);

  useEffect(() => {
    const unsubscribe = onValue(
      reference,
      (snapshot: DataSnapshot) => {
        let keysYears: string[] = [];
        let monthsCollection: string[][] = [];

        snapshot.forEach((firstLevelSnapshot: DataSnapshot) => {
          const firstLevelKey: string = firstLevelSnapshot.key || "";
          keysYears.push(firstLevelKey);

          const nestedKeysRef: DatabaseReference = ref(
            database,
            `${firstLevelKey}`
          );
          onValue(
            nestedKeysRef,
            (nestedSnapshot: DataSnapshot) => {
              let keysMonths: string[] = [];

              nestedSnapshot.forEach((nestedKeySnapshot: DataSnapshot) => {
                const nestedKey: string = nestedKeySnapshot.key || "";
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
            return monthsInYear.map((month: string) => {
              return keysYears[idx] + "-" + month;
            });
          })
          .flat()
          .reverse();

        setDatabaseListMonths(months);
      },
      error => {
        console.log("dtugi");
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
