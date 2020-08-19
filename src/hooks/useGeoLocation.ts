import { useState, useEffect } from 'react';

const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

interface position {
  error?: string;
  latitude?: number;
  longitude?: number;
}

export default function useGeoLocation() {
  const [position, setPosition] = useState<position>();

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => setPosition(pos.coords),
        (err) => setPosition({ error: `ERROR(${err.code}): ${err.message}` }),
        options
      );
    } else {
      setPosition({ error: "You device don't support geolocation api" });
    }
  }, []);

  return position;
}
