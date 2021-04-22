import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';

import { getDate } from '../utils';

const initialState = {
  jobList: [],
  filters: {
    priorityFilter: 'all',
    statusFilter: 'all',
    dateFilter: getDate(),
  },
};

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk)),
);

export default store;
