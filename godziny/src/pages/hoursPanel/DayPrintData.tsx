interface Props {
  day: any;
}

const DayPrintData = (props: Props) => {
  return (
    <div>
      <small>Imię:{props.day.userName}</small>
      <small>{props.day.date}</small>
      <small>Godz.: {props.day.hours}</small>
    </div>
  );
};

export default DayPrintData;
