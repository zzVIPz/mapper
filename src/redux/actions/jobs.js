const jobsRequested = () => ({
  type: 'FETCH_JOBS_REQUEST',
});

const jobsLoaded = (jobList) => ({
  type: 'FETCH_JOBS_SUCCESS',
  payload: jobList,
});

export const setPriorityFilter = (priority) => ({
  type: 'SET_PRIORITY_FILTER',
  payload: priority,
});

export const setStatusFilter = (status) => ({ type: 'SET_STATUS_FILTER', payload: status });

export const setDateFilter = (date) => ({ type: 'SET_DATE_FILTER', payload: date });

export const fetchJobs = (jobService) => () => (dispatch) => {
  dispatch(jobsRequested());
  jobService.getJobs().then((data) => dispatch(jobsLoaded(data)));
};
