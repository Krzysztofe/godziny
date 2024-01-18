import ListGroup from "react-bootstrap/ListGroup";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import ListItemNoData from "../../listContainer/ListItemNoData";
import ListMonthsItems from "./ListMonthsItems";
import "./_listMonthsInCollapse.scss";

const ListMonthsInCollapse = () => {
  const { listMonths } = useSelector((state: RootState) => state.listMonths);

  const noData = listMonths?.length === 0;

  return (
    <ListGroup className="_scrolHidden _ListMonthsInCollapse _fs-primary">
      <ListItemNoData noData={noData} styles={"_noDataStyles"} />
      <ListMonthsItems />
    </ListGroup>
  );
};

export default ListMonthsInCollapse;
