import {
  DataSnapshot,
  DatabaseReference,
  onValue,
  ref,
} from "firebase/database";
import { useEffect, useState } from "react";
import useFirebaseConfig from "../hooks/useFirebaseConfig";

const useDatabaseListMonths = () => {
  const { firebaseInstance } = useFirebaseConfig();
  const database = firebaseInstance.database;

  const reference: DatabaseReference = ref(database!);
  const [error, setError] = useState<string>("");
  const [listMonths, setListMonths] = useState<string[]>([]);

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
            database!,
            `${firstLevelKey}`
          );
          onValue(
            nestedKeysRef,
            (nestedSnapshot: DataSnapshot) => {
              let keysMonths: string[] = [];

              nestedSnapshot.forEach((nestedKeySnapshot: DataSnapshot) => {
                const nestedKey: string = nestedKeySnapshot.key || "";
                keysMonths.push(nestedKey);
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

        setListMonths(months);
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
    listMonths,
    error,
  };
};

export default useDatabaseListMonths;
