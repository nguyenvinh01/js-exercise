function repeatString(string, num) {
  // Coding here
  if(!string || !num) return;
  const arr = Array.from({length: num}, (_, i) => i)
  const result = arr.reduce(function (pre){
    return pre+=string
  },'')
  return result;
}
console.log(repeatString("hey",3));
