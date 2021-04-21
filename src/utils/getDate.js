import getFormattedData from './getFormattedDate';

function getDate() {
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  return getFormattedData(timezone);
}

export default getDate;
