// === DO NOT EDIT THIS REGION ===
// Read the comments to understand how the program is structured.

// Prompt the user for a list of integers separated by commas.
const userInputString = prompt(
  "Please enter some integers separated by commas.",
  "1,2,3,4,5"
);

// Split the string of numbers into an array of strings.
const stringArray = userInputString.split(",");

// Convert the array of strings into an array of numbers.
const numbers = [];
for (let i = 0; i < stringArray.length; i++) {
  const str = stringArray[i];
  const number = parseInt(str);
  numbers.push(number);
}

// Peform some calculations on the numbers.
console.log(numbers);
console.log(`You have given ${getLength(numbers)} numbers.`);
console.log(`The sum of your numbers is ${getSum(numbers)}.`);
console.log(`The mean of your numbers is ${getMean(numbers)}.`);
console.log(`The smallest of your numbers is ${getMin(numbers)}.`);
console.log(`The largest of your numbers is ${getMax(numbers)}.`);
console.log(`The range of your numbers is ${getRange(numbers)}.`);
console.log(`The even numbers you gave are ${getEvens(numbers)}.`);
console.log(`The odd numbers you gave are ${getOdds(numbers)}.`);

// === EDIT THE CODE BELOW ===
// Complete the functions below to make the program work!

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the length of the array
 */
function getLength(numbers) {
  return numbers.length;
  // TODO
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the sum of the numbers
 */
function getSum(numbers) {
  let sum = 0;
  // [1,2,7,4,5]
  // index[0] this is one
  // sum = sum + index[0]
  // index[1] this is two
  // sum = sum + index[1]
  // index[2] this is seven
  // sum = sum + index[2]
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
  // TODO
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the mean of the numbers
 */
function getMean(numbers) {
  return getSum(numbers) / getLength(numbers);
  // TODO
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the smallest of the numbers
 */
function getMin(numbers) {
  // lowestValue = 10000
  // [14, 3, 5]
  // is 14 less than 1000
  // lowest is going to be 14
  // is 3 less than 14
  // lowest is going to be 3
  // is 5 less than 3
  // do nothing

  // lowest is 3 so return 3
  let lowestVal = 10000;
  for (let i = 0; i < numbers.length; i++) {
    const currentNum = numbers[i];
    if (currentNum < lowestVal) {
      lowestVal = currentNum;
    }
  }
  return lowestVal;
  // TODO
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the largest of the numbers
 */
function getMax(numbers) {
  let maxVal = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    const currentNum = numbers[i];
    if (currentNum > maxVal) {
      maxVal = currentNum;
    }
  }
  return maxVal;
  // TODO
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the range of the numbers (max - min)
 */
function getRange(numbers) {
  return getMax(numbers) - getMin(numbers);
  // TODO
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number[]} the even numbers in the array
 */
function getEvens(numbers) {
  let evens = []
  for (let i = 0; i < numbers.length; i++) {
    const currentNum = numbers[i];
    if (currentNum % 2 === 0) {
      evens.push(currentNum)
    }

  }
  return evens
    // TODO
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number[]} the odd numbers in the array
 */
function getOdds(numbers) {
  let odds =[]
  for (let i = 0; i < numbers.length; i++) {
    const currentNum = numbers[i];
    if (currentNum % 2 === 1) {
      odds.push(currentNum)
    }
  }
  return odds
  // TODO
}
