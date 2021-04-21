import React from 'react';
import { JobServiceConsumer } from '../job-service-context';

const withJobService = () => (Wrapped) => (props) => (
  <JobServiceConsumer>
    {(jobService) => <Wrapped {...props} jobService={jobService} />}
  </JobServiceConsumer>
);

export default withJobService;
