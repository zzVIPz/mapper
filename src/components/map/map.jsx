import React from 'react';

import { connect } from 'react-redux';

import GoogleMapReact from 'google-map-react';
import MapMarker from '../map-marker';

import { filterJobs } from '../../utils';

import MAP_DEFAULT_PROPS from './const';

import './map.css';

function JobMap({ markers, center, zoom }) {
  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyB9YBNN9dd0EBVOODgJ-k495AgA5sc4Sos' }}
        defaultCenter={center}
        defaultZoom={zoom}
        options={{ disableDoubleClickZoom: true, fullscreenControl: false }}
      >
        {markers}
      </GoogleMapReact>
    </div>
  );
}

function JobMapContainer({ jobs, priorityFilter, statusFilter, dateFilter }) {
  const { center, zoom } = MAP_DEFAULT_PROPS;

  const filteredJobs = filterJobs(
    jobs,
    priorityFilter,
    statusFilter,
    dateFilter,
  );

  const markers = filteredJobs.map((el) => {
    const { lat, long, id, priority } = el;
    return <MapMarker lat={lat} lng={long} key={id} priority={priority} />;
  });

  return <JobMap markers={markers} center={center} zoom={zoom} />;
}

const mapStateToProps = ({
  jobList: { jobs },
  filters: { priorityFilter, statusFilter, dateFilter },
}) => ({
  jobs,
  priorityFilter,
  statusFilter,
  dateFilter,
});

export default connect(mapStateToProps)(JobMapContainer);
