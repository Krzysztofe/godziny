import { useFormikContext } from "formik";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getSearchedName } from "../../../redux/storeFeatures/filterDaysSlice";

const GetOnChangeValues = () => {
  const dispatch = useDispatch();
  const { values } = useFormikContext<any>();

  useEffect(() => {
    dispatch(getSearchedName(values.searchedName));
  }, [values.searchedName]);

  return null;
};

export default GetOnChangeValues;
