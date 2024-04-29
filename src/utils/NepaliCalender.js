const convertADtoBS = (adYear, adMonth, adDay) => {
  const bsEpochYear = 1970;
  const bsEpochMonth = 1;
  const bsEpochDay = 1;

  const adEpochYear = 1913;
  const adEpochMonth = 4;
  const adEpochDay = 14;

  let totalDaysAD = countTotalDays(adYear, adMonth, adDay);
  let totalDaysBS = totalDaysAD + bsDaysFromADToEpoch - adDaysFromEpochToAD;

  let bsYear = bsEpochYear;
  let bsMonth = bsEpochMonth;
  let bsDay = bsEpochDay;

  while (totalDaysBS > 0) {
      const daysInYear = isLeapYearBS(bsYear) ? 366 : 365;
      if (totalDaysBS >= daysInYear) {
          totalDaysBS -= daysInYear;
          bsYear++;
      } else {
          const monthLengths = getBSMonthLengths(bsYear);
          for (let i = 0; i < 12; i++) {
              if (totalDaysBS < monthLengths[i]) {
                  bsMonth = i + 1;
                  bsDay = totalDaysBS + 1;
                  totalDaysBS = 0;
                  break;
              }
              totalDaysBS -= monthLengths[i];
          }
      }
  }

  return { bsYear, bsMonth, bsDay };
};

const countTotalDays = (year, month, day) => {
  let totalDays = 0;

  for (let y = 0; y < year; y++) {
      totalDays += isLeapYear(y) ? 366 : 365;
  }

  for (let m = 1; m < month; m++) { // Start from month 1
      totalDays += getMonthLength(year, m);
  }

  totalDays += day - 1;

  return totalDays;
};


const isLeapYear = (year) => {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
};

const isLeapYearBS = (year) => {
  return year % 4 === 0;
};

const getMonthLength = (year, month) => {
  const isLeap = isLeapYear(year);
  switch (month) {
      case 1:
          return 31;
      case 2:
          return isLeap ? 29 : 28;
      case 3:
          return 31;
      case 4:
          return 30;
      case 5:
          return 31;
      case 6:
          return 30;
      case 7:
          return 31;
      case 8:
          return 31;
      case 9:
          return 30;
      case 10:
          return 31;
      case 11:
          return 30;
      case 12:
          return 31;
      default:
          return 0;
  }
};

const getBSMonthLengths = (year) => {
  return isLeapYearBS(year) ?
      [32, 32, 31, 32, 31, 31, 31, 30, 30, 30, 30, 30] :
      [31, 31, 31, 32, 31, 31, 31, 30, 30, 30, 30, 30];
};

// Days from AD epoch to Bikram Sambat epoch
const adDaysFromEpochToAD = countTotalDays(1970, 1, 1);
const bsDaysFromADToEpoch = countTotalDays(1913, 4, 14);

// Usage
/* const adYear = 2024;
const adMonth = 4;
const adDay = 3;

const bsDate = convertADtoBS(adYear, adMonth, adDay);
console.log("BS Date:", bsDate); */
export default convertADtoBS