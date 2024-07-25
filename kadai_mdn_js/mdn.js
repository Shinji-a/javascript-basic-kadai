const date = new Date();
const [month, day, year] = [
  date.getMonth(),
  date.getDate(),
  date.getFullYear(),
];
const Tmonth = month+1;
console.log(year + '年' + Tmonth + '月' + day +'日');