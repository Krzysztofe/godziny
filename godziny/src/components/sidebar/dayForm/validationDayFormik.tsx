import * as yup from "yup";

export const validationSchema = yup.object({
  userName: yup
    .string()
    .test("is-name-valid", "Imię wymagane", value => value !== "Imię")
    .required("Imię wymagane"),
  hours: yup
    .mixed()
    .test(
      "is-hours-valid",
      "Liczba godzin wymagana",
      value => value !== "Liczba godzin"
    )
    .required("Liczba godzin wymagana"),

  place: yup
    .string()
    .test(
      "is-place-valid",
      "Lokalizacja wymagana",
      value => value !== "Lokalizacja"
    )
    .required("Lokalizacja wymagana"),
});
