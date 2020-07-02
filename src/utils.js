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
      En: ''
    },
    icon: true,
    disabled: Boolean(myLocation?.error)
  };
};
