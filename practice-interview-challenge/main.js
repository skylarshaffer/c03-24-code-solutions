'use strict';
function getTotal(start, end) {
  //  Gauss summation
  const getTotalResult = end * ((end + 1) / 2) - (start - 1) * (start / 2);
  return getTotalResult;
}
function getOdds(start, end) {
  const getOddsResult = [];
  for (let i = start; i <= end; i++) {
    if (i % 2 !== 0) {
      getOddsResult.push(i);
    }
  }
  return getOddsResult;
}
function getEvens(start, end) {
  const getEvensResult = [];
  for (let i = start; i <= end; i++) {
    if (i % 2 === 0) {
      getEvensResult.push(i);
    }
  }
  return getEvensResult;
}
function getRange(start, end) {
  const getRangeResult = [];
  for (let i = start; i <= end; i++) {
    getRangeResult.push(i);
  }
  return getRangeResult;
}
function getAverage(start, end) {
  const getAverageResult = (start + end) / 2;
  return getAverageResult;
}
function getRangeReport(start, end) {
  const getRangeReportResult = {
    total: getTotal(start, end),
    odds: getOdds(start, end),
    evens: getEvens(start, end),
    range: getRange(start, end),
    average: getAverage(start, end),
  };
  return getRangeReportResult;
}
console.log(getRangeReport(5, 231));
