import { useFormikContext } from "formik";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getSearchedName } from "../../redux/storeFeatures/filterDaysSlice";

const EEE = () => {
  const dispatch = useDispatch();
  const { values } = useFormikContext<any>();



  useEffect(() => {
    dispatch(getSearchedName(values.searchedName));
  }, [values.searchedName]);

  return <></>;
};

export default EEE;
