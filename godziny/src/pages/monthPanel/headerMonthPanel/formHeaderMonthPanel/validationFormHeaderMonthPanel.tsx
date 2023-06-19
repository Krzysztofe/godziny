import * as yup from "yup";

export const validationSchema = yup.object({
  allHours: yup
    .number()
    .max(320, "Max. 320")
    .required("Podaj liczbę godzin"),
});
