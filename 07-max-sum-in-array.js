// 7. Max sum in the array
// You are given an array containing positive and negative integers. Write an algorithm which will find the largest sum in a continuous sequence.

// Input: [4, 6, -3, 5, -2, 1]
// Output: 11

const maxSum = (arr) => {
  if (arr.length < 2) {
    return undefined;
  }
  let largest = 0;
  let secondLargest = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
    else if (arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }

  return largest + secondLargest;
};

console.log(maxSum([4, 6, -3, 5, -2, 1]));

// big O is O(n) because it is strictly dependent on the size of the input