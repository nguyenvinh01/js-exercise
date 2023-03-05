function leapYears(year) {
  // Coding here
  // if(year % 100==0 && year%400!=0) return false

  // return year % 4 == 0 ? true : false
  return (year % 400) ? ((year % 100) ? ((year % 4) ? false : true) : false) : true;
}
console.log(leapYears(1004))