// 10. Products
// Given an array of numbers, write an algorithm that outputs an array where each index is the product of all the numbers in the input array except for the number at each current index. See the following example input and output.

// Input:[1, 3, 9, 4]
// Output:[108, 36, 12, 27]

const makeProduct = (arr) => {
  let total = arr.reduce((a, b) => {
    return a * b;
  });

  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    newArr[i] = total / arr[i]; 
  }

  return newArr;
};

console.log([1, 3, 9, 4]);

// O(n), directly proportional to the size of the input;