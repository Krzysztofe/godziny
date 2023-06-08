import * as yup from "yup";

export const validationSchema = yup.object({
  date: yup.string().required("Podaj datę"),
  hours: yup.number().required("Podaj liczbę godzin"),
  userName: yup.string().required("Podaj imię"),
//   location: yup.string().required("Podaj miejsce"),
});


