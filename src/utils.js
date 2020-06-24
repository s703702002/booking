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
  let dep = new Date().getHours() + 1;
  let arr = dep + 3;
  dep = prefixZero(dep.toString()) + ":00";
  arr = prefixZero(arr.toString()) + ":00";
  return {
    defaultDepTime: dep,
    defaultArrTime: arr
  };
}

const toRad = value => (value * Math.PI) / 180;

const robustAcos = value => {
  if (value > 1) {
    return 1;
  }
  if (value < -1) {
    return -1;
  }

  return value;
};

export const getClosestStation = (myLocation, stations) => {
  let closest = null;
  let min = Number.MAX_SAFE_INTEGER;

  if (!myLocation || myLocation.error || !stations.length) return null;

  stations.forEach(station => {
    const earthRadius = 6378137;
    const fromLat = myLocation.latitude;
    const fromLon = myLocation.longitude;
    const toLat = station.StationPosition.PositionLat;
    const toLon = station.StationPosition.PositionLon;

    const distance =
      Math.acos(
        robustAcos(
          Math.sin(toRad(toLat)) * Math.sin(toRad(fromLat)) +
            Math.cos(toRad(toLat)) *
              Math.cos(toRad(fromLat)) *
              Math.cos(toRad(fromLon) - toRad(toLon))
        )
      ) * earthRadius;

    if (distance < min) {
      min = distance;
      closest = station;
    }
  });

  return {
    ...closest,
    StationName: {
      Zh_tw: `最近的車站: ${closest.StationName.Zh_tw}`,
      En: ""
    },
    icon: true,
    disabled: Boolean(myLocation?.error)
  };
};
