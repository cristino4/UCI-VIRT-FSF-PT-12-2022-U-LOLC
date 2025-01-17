const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// TODO: Why is the 'binarySearch' function not running properly??
//create function with 2 inputs
function binarySearch(array, element) {
  //define start and end index variables
  let start = 0;
  let end = array.length - 1;

  while(start <= end){
    let mid = Math.floor((start + end) / 2);
    if(array[mid] === element){
      return true;
    } else if(array[mid] < element){
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return false;
}

console.log(binarySearch(arr, 7));

module.exports = binarySearch;
