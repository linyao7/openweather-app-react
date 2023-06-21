export const formatDate = (timestamp: number) => {
  const date = new Date(timestamp * 1000);
  const time = date.toLocaleString('en-IN', { timeStyle: 'short' });
  let month = (date.getMonth() + 1).toString();
  let day = date.getDate().toString();
  const year = date.getFullYear().toString();

  if (month.length < 2) {
    month = '0' + month;
  }
  if (day.length < 2) {
    day = '0' + day;
  }
  return `${day}-${month}-${year} ${time}`;
};
