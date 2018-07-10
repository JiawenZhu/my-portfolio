
function getSecondLargest(nums) {
    // Complete the function
    let sortArray = nums.sort().reverse();
    let targetArray = Array.from(new Set(sortArray));
    console.log(sortArray);
    
}
function main(){
  var array = [1,3,4,5,6];
  console.log(getSecondLargest(array));
}