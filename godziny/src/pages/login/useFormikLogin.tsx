import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { currMonthDigits, currYearDigits } from "../../data/dataCurrentDates";
import { auth } from "../../data/firebaseConfig";
import { alert } from "../../utils/alertHelpers";

const useFormikLogin = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const initialValues = { password: "wwwwww" };

  const onSubmit = (values: any) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, "ww@wp.pl", values.password)
      .then(() => {
        navigate(`/${currYearDigits}-${currMonthDigits}`);
        setIsLoading(false);
      })
      .catch(error => alert(error.message))
      .finally(() => {
        setIsLoading(false);
      });
  };

  return { initialValues, onSubmit, isLoading };
};

export default useFormikLogin;
