// NATIONAL GRID INTERVIEW ASSIGNMENT
// CANDIDATE NAME: SERGEY TELEGO

import React, { useEffect, useState } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Map from '../map';
import Sidebar from '../sidebar';

import { fetchJobs } from '../../redux/actions/jobs';

import withJobService from '../hoc';
import { compose } from '../../utils';

import './app.css';

const Natification = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(false), 3000);

    return () => clearTimeout(timeout);
  }, []);

  return visible && <p>Hello</p>;
};

function App() {
  return (
    <div className="app__container">
      <Natification />
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

const mapStateToProps = ({
  filters: { priorityFilter, statusFilter, dateFilter },
}) => ({
  priorityFilter,
  statusFilter,
  dateFilter,
});

const mapDispatchToProps = (dispatch, { jobService }) =>
  bindActionCreators(
    {
      fetchJob: fetchJobs(jobService),
    },
    dispatch,
  );

export default compose(
  withJobService(),
  connect(mapStateToProps, mapDispatchToProps),
)(AppContainer);
