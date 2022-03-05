/* eslint-disable camelcase */
import transformDate from './transformDate';

const date = transformDate();

const handleData = (fetchedData) => {
  const newData = fetchedData.dates[date].countries;
  const obj = Object.entries(newData);
  const resultArray = [];
  for (let i = 0; i <= obj.length - 1; i += 1) {
    const objdata = obj[i][1];
    const {
      id, name, regions, today_confirmed,
    } = objdata;
    resultArray.push({
      id, name, regions, today_confirmed,
    });
  }
  return resultArray;
};

export default handleData;
