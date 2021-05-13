import React from 'react';
import { render } from 'react-dom';

import { Provider } from 'react-redux';
import store from './redux/store';

import App from './components/app';
import JobService from './services/job-service';
import JobServiceContext from './components/job-service-context';

import './index.css';

const jobService = new JobService();
const { Provider: JobServiceProvider } = JobServiceContext;

render(
  <Provider store={store}>
    <JobServiceProvider value={jobService}>
      <App />
    </JobServiceProvider>
  </Provider>,
  document.getElementById('root'),
);
