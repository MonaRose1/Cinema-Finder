import React from 'react';
import useNearbyCinemas from "../data/nearbyCinemas";
import { useMapContext } from './Map/context';

const NearbyCinemaMarkers = () => {
  const { Marker } = useMapContext();
  const { cinemas } = useNearbyCinemas();

  return cinemas.map((cinema, idx) => {
    if (typeof cinema.lat !== 'number' || typeof cinema.lng !== 'number') return null;
    return (
      <Marker lat={cinema.lat} lon={cinema.lng} key={idx} />
    )
  })
};

export default NearbyCinemaMarkers;