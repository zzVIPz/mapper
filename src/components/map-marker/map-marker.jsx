import React from 'react';
import icons from './const';

import './map-marker.css';

function MapMarker({ priority }) {
  return (
    <div>
      <img className="map-marker" src={icons[priority]} alt="" />
    </div>
  );
}

export default MapMarker;
