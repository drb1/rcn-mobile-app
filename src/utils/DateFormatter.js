const DateFormat = ({utcString}) => {
  // Parse the UTC string into a Date object
  const date = new Date(utcString);
  const options = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  };

  const formattedDate = date.toLocaleDateString('en-US', options);
  return formattedDate;
};

export default DateFormat