import { useState, useEffect } from 'react';

const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

export default function useGeoLocation() {
  const [position, setPosition] = useState(null);

  function success(pos) {
    setPosition(pos.coords);
  }

  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
    setPosition({ error: err });
  }

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error, options);
    } else {
      setPosition({ error: "You device don't support geolocation api" });
    }
  }, []);

  return position;
}
