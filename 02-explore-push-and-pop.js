const Array = require('./myArray');

// 2. Explore the push() method
// Using the Array class you just created above, add an item to the array. Use the following function:

function main() {
  Array.TORESIZE = 3;

  let arr = new Array();

  arr.push(3);
  arr.push(5);
  arr.push(15);
  arr.push(19);
  arr.push(45);
  arr.push(10);
  arr.pop();
  arr.pop();
  arr.pop();
  console.log(arr);

  console.log(arr.get(0));
  arr.pop(); arr.pop(); arr.pop();
  arr.push('tauhida');
  console.log(arr.get(0));
}

main();

// What is the length, capacity and memory address of your array?

// length = 1 (1 item added)
// capacity = 3 ( resized at push because capacity was 0 )
// address = 0 (started with new Memory)

// Add the following in the main function and then print the array:

//     ...
//     arr.push(5);
//     arr.push(15);
//     arr.push(19);
//     arr.push(45);
//     arr.push(10);
// What is the length, capacity and memory address of your array? Explain the result of your program after adding the new lines of code.

// length => 6
// capacity => 12
// memory address => 3

// *--------------------

// Add the following in the main function and then print the array:

//   ...
//   arr.pop();
//   arr.pop();
//   arr.pop();
// What is the length, capacity, and address of your array? Explain the result of your program after adding the new lines of code.

// length of 3 (we removed 3 items)
// capacity does not change
// ptr does not change (no need to reallocate)

// *-----------------------------------------\

// 4. Understanding more about how arrays work
// Print the 1st item in the array arr.

// Empty the array and add just 1 item: arr.push("tauhida");

// Print this 1 item that you just added. What is the result? Can you explain your result?
// Array { length: 3, _capacity: 12, ptr: 3 }
// 3
// NaN

// this is because we are working with a float 64 array

// What is the purpose of the _resize() function in your Array class?

// if the array capacity is lower than the length, we ask memory to give us a new address with more space, then fill the array items into that new space
