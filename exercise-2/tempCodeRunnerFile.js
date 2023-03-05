function reverseString(string) {
  // Coding here
  const arrString = string.split('');

  const reverseArr = arrString.reverse().join('')
  return reverseArr;
}
console.log(reverseString("Vinh 123"));
