import * as yup from "yup";

export const validationSchema = yup.object({
  allHours: yup
    .number()
    .max(320, "Nie więcej niż 320 godzin")
    .required("Podaj liczbę godzin"),
});
