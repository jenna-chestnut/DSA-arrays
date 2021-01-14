// 8. Merge longerys
// Imagine you have 2 longerys which have already been sorted. Write an algorithm to merge the 2 longerys into a single longery, which should also be sorted.

// Input:[1, 3, 6, 8, 11] and [2, 3, 5, 8, 9, 10]
// Output:[1, 2, 3, 3, 5, 6, 8, 8, 9, 10, 11]

// This has a time complexity of O(n(logn)) and O(n) space complexity.

const firstNum = [1, 3, 6, 8, 11];
const secondNum = [2, 3, 5, 8, 9, 10];

const mergeArrays = (arr1, arr2) => {
  let result = [...arr1, ...arr2];
  return result.sort((a, b) => a - b);
};

console.log(mergeArrays(firstNum, secondNum));

// *-------------------------

const mergeArr = (arrA, arrB) => {
  let newArr = [];

  let longer, shorter;
  
  if(arrA.length > arrB.length) 
  { longer = arrA; shorter = arrB; } 
  else { longer = arrB; shorter = arrA; }

  for (let i = 0; i < longer.length; i++) {
    if (shorter[i]) {
      if ( longer[i] >= shorter[i] ) {
        newArr.push(shorter[i]);
        newArr.push(longer[i]);
      }
      else {
        newArr.push(longer[i]);
        newArr.push(shorter[i]);
      }
    }
    else {
      if ( longer[i] >= newArr[newArr.length - 1] ) {
        newArr.push(longer[i]);
      } 
      else {
        let num = newArr.pop();
        newArr.push(longer[i]);
        newArr.push(num);
      }
    }
    console.log(newArr);
  }

  return newArr;
};

console.log(mergeArr([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]));

// *--------------------

const mergeTwo = (arr1, arr2) => {
  let merged = [];
  let index1 = 0;
  let index2 = 0;
  let current = 0;

  while (current < arr1.length + arr2.length) {
    let isArr1Depleted = index1 >= arr1.length;
    let isArr2Depleted = index2 >= arr2.length;

    if (!isArr1Depleted && (isArr2Depleted || arr1[index1] < arr2[index2])) {
      merged[current] = arr1[index1];
      index1++;
    } else {
      merged[current] = arr2[index2];
      index2++;
    }

    current++;
  }

  return merged;
};
