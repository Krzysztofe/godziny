import * as yup from "yup";

export const validationSchema = yup.object({
  userName: yup.string().required("Podaj imię"),
  date: yup.string().required("Podaj datę"),
  hours: yup.number().required("Podaj liczbę godzin").moreThan(0, "Liczba godzin musi być większa od 0"),
  place: yup.string().required("Podaj lokalizację"),
});
