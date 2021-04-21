import updateJobList from './job-list';
import updateFilters from './filters';

export default function reducer(state, action) {
  const { jobList, filters } = state;
  return {
    jobList: updateJobList(jobList, action),
    filters: updateFilters(filters, action),
  };
}
