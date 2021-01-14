// 11. 2D array
// Write an algorithm which searches through a 2D array, and whenever it finds a 0 should set the entire row and column to 0.

const Array = require('./myArray');

// Input:
// [[1,0,1,1,0],
// [0,1,1,1,0],
// [1,1,1,1,1],
// [1,0,1,1,1],
// [1,1,1,1,1]];
// Output:
// [[0,0,0,0,0],
// [0,0,0,0,0],
// [0,0,1,1,0],
// [0,0,0,0,0],
// [0,0,1,1,0]];

// loop through to find 0

// const smol = 
//   [[1,0,1,1,0],
//     [0,1,1,1,0],
//     [1,1,1,1,1],
//     [1,0,1,1,1],
//     [1,1,1,1,1]];

// const twoD = (arr) => {
//   let len = arr.length;
//   let horizontal0s = {};

//   for (let i = 0; i < len; i++) {
//     console.log(i + ' ' + arr[i]);
//     horizontal0s[i] = false;
//     arr[i].forEach((a, idx) => {
//       if (a === 0) 
//         horizontal0s[i] = [idx]; 
//     }
//     );
//   } 
  
//   console.log(horizontal0s);

//   for (let i = 0; i < len; i++) { 
//     console.log(horizontal0s[i]);
//     arr[i] = horizontal0s[i]
//       ? arr[i].map(el => 0)
//       : arr[i].map((el, idx) => {
//         return horizontal0s[idx]
//           ? 0 : el;
//       });
//   }

//   return arr;
// };

// console.log(twoD(smol));

const zeroify = (input) => {
  let copy = [...input.map((row) => [...row])];
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i].length; j++) {
      if (copy[i][j] === 0) transformToZero(input, j, i);
    }
  }
};

const transformToZero = (input, x, y) => {
  input[y].fill(0);
  for (let i = 0; i < input.length; i++) {
    input[i][x] = 0;
  }
  return input;
};

const input = [
  [1, 0, 1, 1, 0],
  [0, 1, 1, 1, 0],
  [1, 1, 1, 1, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 1, 1],
];

zeroify(input);

console.log(input);