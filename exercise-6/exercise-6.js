function convertNumber(number) {
  // Coding here
  var arr = '';
  while(number > 0){
    arr = arr + (number % 2);
    number = ((number-1) / 2).toFixed(0);
  }
  return arr.split('').reverse().join('');
}
console.log(convertNumber(33));