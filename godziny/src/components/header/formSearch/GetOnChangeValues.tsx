import { useFormikContext } from "formik";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getSearchedName } from "../../../redux/storeFeatures/searchNameSlice";

const GetOnChangeValues = () => {
  const dispatch = useDispatch();
  const { values } = useFormikContext<{ searchedName: string }>();

  useEffect(() => {
    dispatch(getSearchedName(values.searchedName));
  }, [values.searchedName]);

  return null;
};

export default GetOnChangeValues;
