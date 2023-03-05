function removeFromArray(array, deleteItem) {
  // Coding here
  const check = array.some((a)=>{
    return a == deleteItem
  });
  if(!check) return "Khong co trong mang";
  return a = array.filter( item => item !=deleteItem)
}

console.log(removeFromArray([1,2,3,4,5], 6));