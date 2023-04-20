// 1.Array method/////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const arr = ['d', 7, '1', '7', 7, 0, 'c', 'a', undefined, 7, '3', false, 1, null]

// 1.1 Splice 'arr' // ['1',7, '7', 7, 0, 'c', 'a', undefined, 7, '3', false, 1]
// 1.2 Show only last three values of 'arr' // [ false, 1, null]
// 1.3 Concat [true,'8','myName'] in front of the 'arr'. //[true,'8','myName','d', 7 '1', '7', 7, 0, 'c', 'a', undefined, 7, '3', false, 1, null]
// 1.4 Find second 7's index. //4
// 1.5 Filter only true value // ['d', 7, '1', '7', 7, 'c', 'a', 7, '3', 1]
// 1.6 Sum only integer values of 'arr' //22
// 1.7 Find fasly values' length //4

// 2.Object vs Array///////////////////////////////////////////////////////////////////////////////////////////////////////////

// 2.1 Create a function called 'findSmallest(inks)', that find out min value of obj.

// console.log(findSmallest({
//     "cyan": 23,
//     "magenta": 12,
//     "yellow": 10
// })); // 10

// console.log(findSmallest({
//     "cyan": 432,
//     "magenta": 543,
//     "yellow": 777
// }));  // 432

// console.log(findSmallest({
//     "cyan": 700,
//     "magenta": 700,
//     "yellow": 0
// })); // 0

// 2.2 Create a function called maxNums that find out max num of each arr

// console.log(maxNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]])); //[7, 90, 2]
// console.log(maxNums([[-34, -54, -74], [-32, -2, -65], [-54, 7, -43]])); // [-34, -2, 7]

// 2.3 Create a function called 'findLetterIndex(text,letter)', that returns the first index and the last index of a character.

// console.log(findLetterIndex("hello", "l")); // [2,3]
// console.log(findLetterIndex("happy", "h")); //[0, 0]

// 2.4 Create a function called checkNum that takes an array of numbers arr and a number n.
//  Return true if the sum of any two elements is equal to the given number. Otherwise, return false.

// console.log(checkNum([10, 12, 4, 7, 9, 11], 16));  //true
// console.log(checkNum([2, 8, 9, 12, 45, 78], 1)); //false
// console.log(checkNum([0, 9, 7, 23, 19, 18, 17, 66], 39)); //false

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 1.Array method/////////////////////////////////////////////////////////////////////////////////////////////////////////////
const arr = [
  "d",
  7,
  "1",
  "7",
  7,
  0,
  "c",
  "a",
  undefined,
  7,
  "3",
  false,
  1,
  null,
];

// 1.1 Splice 'arr'

// let spliceArr1 = arr.splice(1, arr.length - 1);
// console.log(spliceArr1);

// 1.2 Show only last three values of 'arr' // [ false, 1, null]
// let spliceArr2 = arr.splice(arr.length - 3, arr.length - 1);
// console.log(spliceArr2);

// 1.3 Concat [true,'8','myName'] in front of the 'arr'. //[true,'8','myName','d', 7 '1', '7', 7, 0, 'c', 'a', undefined, 7, '3', false, 1, null]
// let newArr = [true, "8", "myName"];
// let concatArr = newArr.concat(arr);
// console.log(concatArr);

// 1.4 Find second 7's index. //4
// let indexOfArr = arr.indexOf(7, 3)
// console.log(indexOfArr);

// 1.5 Filter only true value // ['d', 7, '1', '7', 7, 'c', 'a', 7, '3', 1]
// let filterArr = arr.filter(Boolean);
// console.log(filterArr);

// 1.6 Sum only integer values of 'arr' //22
// let sumArr = arr.reduce((sum, curr, i, arr) => typeof curr === "number" ? sum + curr :sum, 0);
// console.log(sumArr);

// 1.7 Find fasly values' length //4
// let falseArr = arr.filter((el)=> !el)
// console.log(falseArr.length);

// 2.Object vs Array//////////
// 2.1 Create a function called 'findSmallest(inks)', that find out min value of obj.

function findSmallest(inks) {
  let arr = Object.values(inks);
  let min = Math.min(...arr);
  return min;
}

console.log(
  findSmallest({
    cyan: 23,
    magenta: 12,
    yellow: 10,
  })
); // 10

console.log(
  findSmallest({
    cyan: 432,
    magenta: 543,
    yellow: 777,
  })
); // 432

console.log(
  findSmallest({
    cyan: 700,
    magenta: 700,
    yellow: 0,
  })
); // 0

// 2.2 Create a function called maxNums that find out max num of each arr

// console.log(maxNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]])); //[7, 90, 2]
// console.log(maxNums([[-34, -54, -74], [-32, -2, -65], [-54, 7, -43]])); // [-34, -2, 7]

// function maxNums (arr){
//     return arr.map((el) =>Math.max(...el));
// }
// console.log(maxNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]));
// console.log(maxNums([[-34, -54, -74], [-32, -2, -65], [-54, 7, -43]]));

// 2.3 Create a function called 'findLetterIndex(text,letter)', that returns the first index and the last index of a character.

// console.log(findLetterIndex("hello", "l")); // [2,3]
// console.log(findLetterIndex("happy", "h")); //[0, 0]

// function findLetterIndex(text,letter){
//     return [text.indexOf(letter), text.lastIndexOf(letter)]
// }
// console.log(findLetterIndex("hello", "l"));
// console.log(findLetterIndex("happy", "h"));

// 2.4 Create a function called checkNum that takes an array of numbers arr and a number n.
//  Return true if the sum of any two elements is equal to the given number. Otherwise, return false.
// console.log(checkNum([10, 12, 4, 7, 9, 11], 16));  //true
// console.log(checkNum([2, 8, 9, 12, 45, 78], 1)); //false
// console.log(checkNum([0, 9, 7, 23, 19, 18, 17, 66], 39)); //false

function checkNum(array, n) {
  return array.some((item)=> array.includes(n-item))
}
console.log(checkNum([10, 12, 4, 7, 9, 11], 16));  //true
console.log(checkNum([2, 8, 9, 12, 45, 78], 1)); //false
console.log(checkNum([0, 9, 7, 23, 19, 18, 17, 66], 39)); //false