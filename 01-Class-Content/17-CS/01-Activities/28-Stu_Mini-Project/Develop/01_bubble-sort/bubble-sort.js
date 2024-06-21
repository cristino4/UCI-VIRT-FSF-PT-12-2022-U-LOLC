// Create our input data
const unsortedInputArray = [9,0,2,1,3,0]

//seed data in unsortedInputArray
// for (let i = 0; i < 100; i++) {
//   unsortedInputArray.push(Math.round(Math.random() * 10));
// }
console.log(`input array ${unsortedInputArray}`)

// TODO: create bubble sort function
const bubbleSort = (array) => {

  // const start = 0;
  const end = array.length - 1;

  for(let i = 0; i < array.length-1; i++){
    var mid = i
    while(mid < end){
      console.log(`mid ${mid} end ${end}`)
      if(array[mid] > array[mid+1]){
        //swap
        console.log('swap!')
        console.log(`mid ${array[mid]}is greater than mid+1 ${array[mid+1]}`)
        const before = array[mid]
        const after = array[mid+1]
        console.log(`old array ${array}`)
        array[mid] = after;
        array[mid+1] = before;
        mid = mid +1;
        console.log(`new array ${array}`)
      } else if(array[mid] < array[mid+1]){
        //don't swap
        console.log(`Don't swap`)
        mid = mid +1;
      } else if(mid === end){
        console.log(`end`)
        break;
      }
    }
  // bubbleSort(array); 
  console.log(`finished array ${array}`)
  };
};

const sorted = bubbleSort(unsortedInputArray);
// console.log('Post Sort:', sorted.join(' '));
console.log('DONE!');
