import { useEffect } from "react";
import useMonthQuery from "../../../../hooks/useMonthQuery";
import { ModelColumn } from "../../../../sharedModels/modelColumn";
import { addDaysToColumns } from "../utils/utilsAddDaysToColumns";


const firebase = {
  "2024": {
    "08": {
      "calcHours": {
        "acceptedHours": 9,
        "allHours": 137,
        "currentHours": 119,
        "rejectedHours": 0,
        "submittedHours": 9
      },
      "columns": [
        {
          "days": [
            {
              "date": "2025-03-22",
              "hours": 9,
              "id": "8a1e5b6a-dc5f-46bc-aaab-32fb96ec769a",
              "place": "Wewnątrz",
              "userColor": "#298385",
              "userName": "Karol Siwy"
            }
          ],
          "id": "submitted"
        },
        {
          "days": [
            {
              "date": "2025-03-30",
              "hours": 9,
              "id": "8d6d6a2d-d154-4551-98d3-bba6f772dd7e",
              "place": "Wewnątrz",
              "userColor": "#298385",
              "userName": "Karol Siwy"
            }
          ],
          "id": "accepted"
        },
        {
          "id": "rejected"
        }
      ],
      "id": "2024-08"
    },
    "09": {
      "calcHours": {
        "acceptedHours": 15,
        "allHours": 207,
        "currentHours": 182,
        "rejectedHours": 5,
        "submittedHours": 10
      },
      "columns": [
        {
          "days": [
            {
              "date": "2024-09-07",
              "hours": 5,
              "id": "14a6868a-adcb-4d1f-b808-c35e4bb66bd5",
              "place": "Wewnątrz",
              "userColor": "#9d49a2",
              "userName": "Jan Kowalski"
            },
            {
              "date": "2024-09-06",
              "hours": 5,
              "id": "749ca76a-64ea-49b4-9618-9340ac9de5e1",
              "place": "Wewnątrz",
              "userColor": "#d546dd",
              "userName": "Anna Kowalska"
            }
          ],
          "id": "submitted"
        },
        {
          "days": [
            {
              "date": "2024-09-08",
              "hours": 5,
              "id": "bb0a10ed-555f-477e-a000-21488005e4e7",
              "place": "Wewnątrz",
              "userColor": "#9d49a2",
              "userName": "Jan Kowalski"
            },
            {
              "date": "2024-09-07",
              "hours": 5,
              "id": "cc53044f-8447-46c6-9a77-8772dc868523",
              "place": "Wewnątrz",
              "userColor": "#d546dd",
              "userName": "Anna Kowalska"
            },
            {
              "date": "2024-09-05",
              "hours": 5,
              "id": "2295503b-3935-4815-b2d9-9d948428e583",
              "place": "Wewnątrz",
              "userColor": "#d546dd",
              "userName": "Anna Kowalska"
            }
          ],
          "id": "accepted"
        },
        {
          "days": [
            {
              "date": "2024-09-05",
              "hours": 5,
              "id": "1f0f5eaf-7d88-445d-a946-08f7d606b73d",
              "place": "Wewnątrz",
              "userColor": "#d546dd",
              "userName": "Anna Kowalska"
            }
          ],
          "id": "rejected"
        }
      ],
      "id": "2024-09"
    },
    "10": {
      "calcHours": {
        "acceptedHours": 15,
        "allHours": 93,
        "currentHours": 60,
        "rejectedHours": 20,
        "submittedHours": 18
      },
      "columns": [
        {
          "days": [
            {
              "date": "2024-10-30",
              "hours": 5,
              "id": "55e509fb-5693-42a4-bc0b-d3fc2b02486c",
              "place": "Wewnątrz",
              "userColor": "#e0cce1",
              "userName": "Tomasz Orlowski"
            },
            {
              "date": "2024-10-27",
              "hours": 5,
              "id": "e227edad-b98a-4aa8-bc94-37982f9f85e2",
              "place": "Wewnątrz",
              "userColor": "#e0cce1",
              "userName": "Tomasz Orlowski"
            },
            {
              "date": "2024-10-30",
              "hours": 5,
              "id": "05f20d11-a0f2-4e82-ab18-b1da304d38ea",
              "place": "Wewnątrz",
              "userColor": "#ffff00",
              "userName": "Wanda Sobolewska"
            },
            {
              "date": "2025-02-05",
              "hours": 3,
              "id": "a72b5edc-325f-4e33-b948-47644fad63e2",
              "place": "Poza",
              "userColor": "#d546dd",
              "userName": "Anna Kowalska"
            }
          ],
          "id": "submitted"
        },
        {
          "days": [
            {
              "date": "2024-10-30",
              "hours": 5,
              "id": "74c486d4-d512-41dd-a43e-03fc0b567f4c",
              "place": "Wewnątrz",
              "userColor": "#b88d42",
              "userName": "Zofia Kedziak"
            },
            {
              "date": "2024-10-31",
              "hours": 5,
              "id": "4694b60e-a1f9-419c-a8c9-cc796a5cb042",
              "place": "Wewnątrz",
              "userColor": "#b88d42",
              "userName": "Zofia Kedziak"
            },
            {
              "date": "2024-10-27",
              "hours": 5,
              "id": "3de406e0-649e-4886-a9ee-19e13de232f1",
              "place": "Wewnątrz",
              "userColor": "#b88d42",
              "userName": "Zofia Kedziak"
            }
          ],
          "id": "accepted"
        },
        {
          "days": [
            {
              "date": "2024-10-30",
              "hours": 5,
              "id": "49ff4b32-7efa-4afd-9a04-1426ee1a5674",
              "place": "Wewnątrz",
              "userColor": "#298385",
              "userName": "Karol Siwy"
            },
            {
              "date": "2024-10-31",
              "hours": 5,
              "id": "c6f7dba1-f16c-4d06-a753-c246482d3e8b",
              "place": "Wewnątrz",
              "userColor": "#ffff00",
              "userName": "Wanda Sobolewska"
            },
            {
              "date": "2024-10-27",
              "hours": 5,
              "id": "5e1b6b8b-dfbe-4fa1-98aa-33f06f752135",
              "place": "Wewnątrz",
              "userColor": "#ffff00",
              "userName": "Wanda Sobolewska"
            },
            {
              "date": "2024-10-30",
              "hours": 5,
              "id": "528a7978-4dcf-4ff2-83d0-f4d74da07c60",
              "place": "Wewnątrz",
              "userColor": "#d546dd",
              "userName": "Anna Kowalska"
            }
          ],
          "id": "rejected"
        }
      ],
      "id": "2024-10"
    },
    "11": {
      "calcHours": {
        "acceptedHours": 16,
        "allHours": 149,
        "currentHours": 109,
        "rejectedHours": 13,
        "submittedHours": 24
      },
      "columns": [
        {
          "days": [
            {
              "date": "2024-12-27",
              "hours": 4,
              "id": "4bb0c654-73f1-4f56-8ec7-bcee86d929f2",
              "place": "Wewnątrz",
              "userColor": "#ffff00",
              "userName": "Wanda Sobolewska"
            },
            {
              "date": "2024-12-21",
              "hours": 4,
              "id": "721df451-9234-43a1-ad44-726f790f4a3a",
              "place": "Wewnątrz",
              "userColor": "#ffff00",
              "userName": "Wanda Sobolewska"
            },
            {
              "date": "2025-07-31",
              "hours": 8,
              "id": "0a683b3e-b748-4b46-96a0-79f27fa7fca4",
              "place": "Wewnątrz",
              "userColor": "#e0cce1",
              "userName": "Ddddb"
            },
            {
              "date": "2025-08-01",
              "hours": 8,
              "id": "54c18413-79e2-4c97-b30c-6bcae66ae0a9",
              "place": "Wewnątrz",
              "userColor": "#e0cce1",
              "userName": "Ddddb"
            }
          ],
          "id": "submitted"
        },
        {
          "days": [
            {
              "date": "2024-12-02",
              "hours": 4,
              "id": "b8786734-5fb5-41a8-89e0-7d832042883b",
              "place": "Wewnątrz",
              "userColor": "#298385",
              "userName": "Karol Siwy"
            },
            {
              "date": "2024-12-21",
              "hours": 4,
              "id": "a8e4e70d-a867-40e7-8466-058d4b015229",
              "place": "Wewnątrz",
              "userColor": "#298385",
              "userName": "Karol Siwy"
            },
            {
              "date": "2024-12-11",
              "hours": 2,
              "id": "3985c555-9192-4d6e-b0ab-ac7ada5dc5f1",
              "place": "Wewnątrz",
              "userColor": "#e0cce1",
              "userName": "Tomasz Orlowski"
            },
            {
              "date": "2025-05-31",
              "hours": 6,
              "id": "f96b8e16-073d-41c1-a7d6-3e16547ab584",
              "place": "Wewnątrz",
              "userColor": "#298385",
              "userName": "Karol Siwy"
            }
          ],
          "id": "accepted"
        },
        {
          "days": [
            {
              "date": "2024-11-09",
              "hours": 7,
              "id": "2489ae12-1360-42ab-a60f-464dcddd7eb6",
              "place": "Wewnątrz",
              "userColor": "#d546dd",
              "userName": "Anna Kowalska"
            },
            {
              "date": "2024-12-11",
              "hours": 2,
              "id": "be18c9c9-5bc3-4f69-952f-e398a093e66e",
              "place": "Wewnątrz",
              "userColor": "#9d49a2",
              "userName": "Jan Kowalski"
            },
            {
              "date": "2024-12-27",
              "hours": 4,
              "id": "848faf4a-8ec6-4acf-a072-be4f4e68a2e9",
              "place": "Wewnątrz",
              "userColor": "#e0cce1",
              "userName": "Tomasz Orlowski"
            }
          ],
          "id": "rejected"
        }
      ],
      "id": "2024-11"
    }
  },
  "2025": {
    "03": {
      "calcHours": {
        "acceptedHours": 0,
        "allHours": 163,
        "currentHours": 163,
        "rejectedHours": 3,
        "submittedHours": 0
      },
      "columns": [
        {
          "id": "submitted"
        },
        {
          "id": "accepted"
        },
        {
          "days": [
            {
              "date": "2025-04-12",
              "hours": 3,
              "id": "93cd6829-5681-4053-9388-1765f125eba4",
              "place": "Wewnątrz",
              "userColor": "#d546dd",
              "userName": "Anna Kowalska"
            }
          ],
          "id": "rejected"
        }
      ],
      "id": "2025-03"
    },
    "05": {
      "calcHours": {
        "acceptedHours": 0,
        "allHours": 212,
        "currentHours": 212,
        "rejectedHours": 6,
        "submittedHours": 0
      },
      "columns": [
        {
          "id": "submitted"
        },
        {
          "id": "accepted"
        },
        {
          "days": [
            {
              "date": "2025-05-31",
              "hours": 6,
              "id": "9a95d575-aa73-4131-8d1d-d8042c18ff09",
              "place": "Wewnątrz",
              "userColor": "#298385",
              "userName": "Karol Siwy"
            }
          ],
          "id": "rejected"
        }
      ],
      "id": "2025-05"
    },
    "07": {
      "calcHours": {
        "acceptedHours": 0,
        "allHours": 0,
        "currentHours": 0,
        "rejectedHours": 0,
        "submittedHours": 0
      },
      "columns": [
        {
          "id": "submitted"
        },
        {
          "id": "accepted"
        },
        {
          "id": "rejected"
        }
      ],
      "id": "2025-07"
    }
  }
}



const useUpdateColumns = (
  setColumns: React.Dispatch<React.SetStateAction<ModelColumn[]>>
) => {
  const { data: month } = useMonthQuery();
  // const columnsWithDays = month && addDaysToColumns(firebase?.columns);

  console.log('columnsWithDays',month?.columns)

  const ttt = [
    { id: "submitted", days: month.columns.submitted },
    { id: "accepted", days: month.columns.accepted },
    { id:"rejected", days: month.columns.rejected },
  ];

  useEffect(() => {
    if (month?.columns) {
      setColumns(ttt);
    }
  }, [month?.columns]);
};

export default useUpdateColumns;
