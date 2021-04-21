const updateJobList = (state, action) => {
  switch (action.type) {
    case 'FETCH_JOBS_REQUEST':
      return {
        jobs: [],
      };

    case 'FETCH_JOBS_SUCCESS':
      return {
        jobs: action.payload,
      };

    default:
      return state;
  }
};

export default updateJobList;
