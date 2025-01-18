const months = {
  January: "Jan",
  February: "Feb",
  March: "Mar",
  April: "Apr",
  May: "May",
  June: "Jun",
  July: "Jul",
  August: "Aug",
  September: "Sep",
  October: "Oct",
  November: "Nov",
  December: "Dec",
};
// const now = new Date();
// const dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export default function Callendar() {
  const year = 2024;
  const month = "July";
  const indexMonth = Object.keys(months).indexOf(month);
  const indexDate = 1;

  const monthNow = new Date(year, indexMonth, indexDate);

  const firstDayOfMonth = monthNow.getDay();
  // const daysInMonth = new Date()
  console.log(firstDayOfMonth);
  //   console.log(monthNow);

  return <div>Callendar</div>;
}
