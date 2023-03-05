function removeFromArray(array, deleteItem) {
  // Coding here
  const f = array.some((a)=>{
    return a == deleteItem
  });
  if(!f) return "Khong co gtrong mang";
  return a = array.filter( item => item !=deleteItem)
}

console.log(removeFromArray([1,2,3,4,5], 6));