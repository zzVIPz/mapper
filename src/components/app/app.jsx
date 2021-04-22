// NATIONAL GRID INTERVIEW ASSIGNMENT
// CANDIDATE NAME:

import React, { useEffect } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Map from '../map';
import Sidebar from '../sidebar';

import { fetchJobs } from '../../redux/actions/jobs';

import withJobService from '../hoc';
import { compose } from '../../utils';

import './app.css';

function App() {
  return (
    <div className="app__container">
      <Map />
      <Sidebar />
    </div>
  );
}

function AppContainer({ fetchJob, priorityFilter, statusFilter, dateFilter }) {
  useEffect(() => {
    fetchJob();
  }, [fetchJob, priorityFilter, statusFilter, dateFilter]);

  return <App />;
}

const mapDispatchToProps = (dispatch, { jobService }) =>
  bindActionCreators(
    {
      fetchJob: fetchJobs(jobService),
    },
    dispatch,
  );

export default compose(
  withJobService(),
  connect(null, mapDispatchToProps),
)(AppContainer);
