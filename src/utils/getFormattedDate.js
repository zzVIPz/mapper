const getFormattedDate = (timezone) => {
  const localDate = new Date().toLocaleString('en-US', {
    timeZone: timezone,
  });
  const date = new Date(localDate);
  const year = date.getFullYear();
  let month = date.getMonth() + 1;
  month = month > 9 ? month : `0${month}`;
  let day = date.getDate();
  day = day > 9 ? day : `0${day}`;
  return `${year}-${month}-${day}`;
};

export default getFormattedDate;
