
import { useParams } from "react-router-dom";

const useURLValues = () => {

      const { monthURL } = useParams();
      const yearFromURL = monthURL?.slice(0, 4);
      const monthFromURL = monthURL?.slice(-2);
    return { monthURL, yearFromURL, monthFromURL };
};

export default useURLValues;