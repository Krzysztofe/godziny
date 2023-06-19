import * as yup from "yup";

export const validationSchema = yup.object({
  userName: yup
    .string()
    .test("is-name-valid", "Podaj imię", value => value !== "Imię")
    .required("Podaj imię"),
  date: yup.string().required("Podaj datę"),
  hours: yup
    .mixed()
    .test(
      "is-hours-valid",
      "Podaj liczbę złożonych godzin",
      value => value !== "Liczba godzin"
    )
    .required("Podaj liczbę złożonych godzin"),

  place: yup
    .string()
    .test(
      "is-place-valid",
      "Podaj lokalizację",
      value => value !== "Lokalizacja"
    )
    .required("Podaj lokalizację"),
});
