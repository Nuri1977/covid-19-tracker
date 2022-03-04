const transformDate = () => {
  const date = new Date(); // M-D-YYYY

  const d = date.getDate();
  const m = date.getMonth();
  const y = date.getFullYear();

  const dateString = `${y}-${m <= 9 ? `0${m}` : m}-${(d <= 9 ? `0${d}` : d)}`;
  return dateString;
};

export default transformDate;
