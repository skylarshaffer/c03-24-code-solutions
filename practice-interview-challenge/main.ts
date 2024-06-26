interface RangeReportObject {
  total: number;
  odds: number[];
  evens: number[];
  range: number[];
  average: number;
}

function getRangeReport(start: number, end: number): RangeReportObject {
  const odds = [];
  const evens = [];
  const range = [];
  const average = (start + end) / 2;
  //  Gauss summation
  const total = end * ((end + 1) / 2) - (start - 1) * (start / 2);
  for (let i = start; i <= end; i++) {
    range.push(i);
    if (i % 2 === 0) {
      evens.push(i);
    } else {
      odds.push(i);
    }
  }
  const getRangeReportResult = {
    total,
    odds,
    evens,
    range,
    average,
  };
  return getRangeReportResult;
}

console.log('getRangeReport(5,231):', getRangeReport(5, 231));
