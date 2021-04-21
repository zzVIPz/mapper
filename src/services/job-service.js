export default class JobService {
  getJobs = async () => {
    const res = await fetch('/example');
    const json = await res.json();
    return json;
  };
}
