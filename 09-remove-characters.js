// 9. Remove characters
// Write an algorithm that deletes given characters from a string. For example, given a string of "Battle of the Vowels: Hawaii vs. Grozny" and the characters to be removed are "aeiou", the algorithm should transform the original string to "Bttl f th Vwls: Hw vs. Grzny". Do not use Javascript's filter, split, or join methods.

// Input:'Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'
// Output: 'Bttl f th Vwls: Hw vs. Grzny'


const removeChar = (str, chars) => {
  let charsObj = {};
  for (let i = 0; i < chars.length; i++) {
    let char = chars[i];
    charsObj[char] = 1;
  }

  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (charsObj[char]) {
      newStr += '';
    }
    else {
      newStr += char;
    }
  }
  return newStr;
};

console.log(removeChar('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'));