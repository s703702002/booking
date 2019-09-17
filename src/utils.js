export function formatDate(date) {
  let d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
}

export function timesToMins(times) {
  const arr = times.split(":");
  return parseInt(arr[0], 10) * 60 + parseInt(arr[1], 10);
}

function prefixZero(str) {
  return str.length < 2 ? "0" + str : str;
}

export function minsToTimes(mins) {
  let h = 0;
  while (mins >= 60) {
    mins -= 60;
    h += 1;
  }
  h = prefixZero(h.toString());
  mins = prefixZero(mins.toString());
  return h + ":" + mins;
}

export function getDefaultHour() {
  let dep = new Date().getHours();
  let arr = dep + 3;
  dep = prefixZero(dep.toString()) + ":00";
  arr = prefixZero(arr.toString()) + ":00";
  return {
    defaultDepTime: dep,
    defaultArrTime: arr
  };
}
