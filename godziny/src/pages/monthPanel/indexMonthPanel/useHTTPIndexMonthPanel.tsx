import React from 'react';
import useURLValues from '../../../hooks/useURLValues';
import { useMonthDataQuery, useMonthsDataQuery } from '../../../services/apiSliceMonths';
import { Spinner } from "react-bootstrap";
import { currMonthDateToString } from '../../../data/dataCurrentDates';
import MonthPanelColumns from '../monthPanelColmns/MonthPanelColumns';
import MonthPanelHeader from '../monthPanelHeader/MonthPanelHeader';

const useHTTPIndexMonthPanel = () => {

const { yearFromURL, monthFromURL } = useURLValues();
const { data, error, isLoading } = useMonthsDataQuery();
const { data: dataMonth } = useMonthDataQuery({
  year: yearFromURL,
  month: monthFromURL,
});

let panelContent = (
  <>
    <MonthPanelHeader />
    <MonthPanelColumns />
  </>
);

if (isLoading) {
  panelContent = (
    <Spinner animation="border" variant="secondary">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
} else if (error) {
  if ("status" in error) {
    const errMsg = "status" in error && error.status;

    panelContent = (
      <h3 className="text-danger col-5">
        <> Błąd: {errMsg} </>
      </h3>
    );
  }
} else if (!data) {
  panelContent = (
    <h5 className="text-warning text-center col-5">
      Brak miesięcy zapisanych w bazie danych. Zapisz miesiąc za pomocą
      formularza
    </h5>
  );
} else if (!dataMonth) {
  panelContent = (
    <h3 className="text-warning text-center col-5">
      Brak danych z miesiąca {currMonthDateToString}. Zapisz miesiąc za pomocą
      formularza
    </h3>
  );
}


    return { panelContent };
};

export default useHTTPIndexMonthPanel;