export default function filterJobs(jobs, priorityFilter, statusFilter, dateFilter) {
  if (jobs && jobs.length) {
    return jobs.filter(
      ({ priority, status, required_date }) => (priority === priorityFilter || priorityFilter === 'all')
        && (status === statusFilter || statusFilter === 'all')
        && Date.parse(required_date) <= Date.parse(dateFilter),
    );
  }

  return [];
}
