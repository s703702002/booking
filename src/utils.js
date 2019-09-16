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

export function minsToTimes(mins) {
  let h = 0;
  while (mins >= 60) {
    mins -= 60;
    h += 1;
  }
  h = h.toString();
  mins = mins.toString();
  if (h.length < 2) h = "0" + h;
  if (mins.length < 2) mins = "0" + mins;
  return h + ":" + mins;
}
