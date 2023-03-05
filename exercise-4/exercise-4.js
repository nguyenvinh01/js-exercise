function leapYears(year) {
  // Coding here
  return (year % 100 == 0 && year % 400 == 0) || year % 4 == 0 ? true : false;
}
console.log(leapYears(2020))