import * as yup from "yup";

export const validationSchema = yup.object({
  userName: yup.string().required("Podaj imię"),
  date: yup.string().required("Podaj datę"),
  hours: yup.number().required("Podaj liczbę złożonych godzin").max(10, "Nie więcej niż 10"),
  place: yup.string().required("Podaj lokalizację"),
});
