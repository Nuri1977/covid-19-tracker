const transformDate = () => {
  const date = new Date(); // M-D-YYYY

  const d = date.getDate();
  let m = date.getMonth();
  const y = date.getFullYear();
  m += 1;

  const dateString = `${y}-${m <= 9 ? `0${m}` : m}-${(d <= 9 ? `0${d}` : d)}`;
  return dateString;
};

export default transformDate;
