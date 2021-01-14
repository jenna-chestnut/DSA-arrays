// 6. Filtering an array
// Imagine you have an array of numbers. Write an algorithm to remove all numbers less than 5 from the array. DO NOT use Array's built-in .filter() method here; write the algorithm from scratch.

const fiveAndUp = (arr) => {
  let fiveUpOnly = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 5) fiveUpOnly.push(arr[i]);
  }

  return fiveUpOnly;
};

let arr = [-5, 6, 9, 1, 4, 0, 12, 100];

console.log(fiveAndUp(arr));

// this is O(n) - one loop whose runtime is dependent on size of input (length of array)