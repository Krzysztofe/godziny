import { ImArrowLeft } from "react-icons/im";
import { Link } from "react-router-dom";
import { RootState } from "../../../redux/store";
import { useSelector } from "react-redux";

type Props = {
  title?: string | null;
  idx: number;
};
const MonthTitle = (props: Props) => {
  const { listMonths } = useSelector((state: RootState) => state.listMonths);

  const title =
    props.title?.charAt(0)?.toLocaleUpperCase() + (props.title?.slice(1) ?? "");

  return (
    <div style={{ width: "45%" }}>
      <Link
        to={`/godziny/${listMonths?.[props.idx]}`}
        className="text-decoration-none fs-responsive text-dark fw-medium"
      >
        <ImArrowLeft
          className="fs-6 me-1 text-primary"
        />
        {title}
      </Link>
    </div>
  );
};

export default MonthTitle;
