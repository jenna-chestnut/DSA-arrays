// 12. String rotation
// Given 2 strings, str1 and str2, write a program that checks if str2 is a rotation of str1.

// Input: amazon, azonma

// Output: False

// Input: amazon, azonam

// Output: true

const strRotate = (str1, str2) => {
  str1 += str1;
  
  return str1.includes(str2);
};

console.log(strRotate('amazon', 'azonam')); // true
console.log(strRotate('amazon', 'azonma')); // false