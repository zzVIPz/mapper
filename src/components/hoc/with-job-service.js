import React, { useContext } from 'react';
import JobServiceContext from '../job-service-context';

const withJobService = () => (Wrapped) => (props) => {
  const jobService = useContext(JobServiceContext);

  // <JobServiceConsumer>
  //   {(jobService) => <Wrapped {...props} jobService={jobService} />}
  // </JobServiceConsumer>

  return <Wrapped {...props} jobService={jobService} />;
};

export default withJobService;
