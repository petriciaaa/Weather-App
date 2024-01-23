function datePostscript(date) {
  let dt = new Date(date);

  if (isNaN(dt)) {
    return "Invalid Date Format. Please provide date in format 'yyyy-MM-dd HH:mm:ss'.";
  }

  let year = String(dt.getFullYear()).slice(-2);
  let month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ][dt.getMonth()];
  let day = dt.getDate();
  let suffix;
  if (day === 1 || (day > 20 && day % 10 === 1)) {
    suffix = "st";
  } else if (day === 2 || (day > 20 && day % 10 === 2)) {
    suffix = "nd";
  } else if (day === 3 || (day > 20 && day % 10 === 3)) {
    suffix = "rd";
  } else {
    suffix = "th";
  }

  return day + suffix + " " + month + " ‘" + year;
}
export { datePostscript };

function getDay() {
  let today = new Date();
  let weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = weekdays[today.getDay()];

  let hours = today.getHours();
  let minutes = today.getMinutes();
  let am_pm = hours >= 12 ? "p.m" : "a.m";

  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  let strTime = hours + ":" + minutes + " " + am_pm;
  return day;
}
function geTime() {
  let today = new Date();
  let weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = weekdays[today.getDay()];

  let hours = today.getHours();
  let minutes = today.getMinutes();
  let am_pm = hours >= 12 ? "p.m" : "a.m";

  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  let strTime = hours + ":" + minutes + " " + am_pm;
  return strTime;
}

function getNext4Days() {
  const today = new Date();
  const days = ["Sund", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const dayOfWeek = today.getDay();
  const nextDays = [];

  for (let i = 1; i < 5; i++) {
    const nextDay = new Date();
    nextDay.setDate(today.getDate() + ((i + 1 - dayOfWeek) % 7));
    nextDays.push(days[nextDay.getDay()]);
  }

  return nextDays;
}

export { geTime, getDay, getNext4Days };
