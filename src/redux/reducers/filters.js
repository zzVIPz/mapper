const updateJobList = (state, action) => {
  const { payload } = action;

  switch (action.type) {
    case 'SET_PRIORITY_FILTER': {
      return {
        ...state,
        priorityFilter: payload,
      };
    }
    case 'SET_STATUS_FILTER': {
      return {
        ...state,
        statusFilter: payload,
      };
    }
    case 'SET_DATE_FILTER': {
      return {
        ...state,
        dateFilter: payload,
      };
    }
    default:
      return state;
  }
};

export default updateJobList;
