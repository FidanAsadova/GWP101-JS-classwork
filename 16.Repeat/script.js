// don't use array methods (except: pop(), push(), shift(), unshift()), use function expression(arrow function) and parameter.
// const arr = ['6', 8, NaN, '0', 5, 4, 'true', false, 7, 'a', undefined, 8, true]

//1.Show only falsy values in 'arr'
// console.log(falsyValue(arr)); //[NaN, false, undefined]

// 2.Show only string values
// console.log(stringValues(arr)); //['6', '0', 'true', 'a']

// 3.Slice array from index 3 to 7(includes both indexs)
// console.log(sliceArr(arr));   //['0', 5, 4, 'true', false]

// 4.Sum only number values
// console.log(sumArr(arr)); //32

//5.Find last 8's index in 'arr'
// console.log(findLastIndex(arr)); //11

// 6.Reverse 'arr'
// console.log(reverseArr(arr));  //[undefined, true, 8, undefined, 'a', 7, false, 'true', 4, 5, '0', NaN, 8, '6']

// 7. Sort 'arrNum' ascending
// const arrNum = [8, 3, 22, 1, 12, 11, 9, 0, 10, 14, 41, 55, 51]
// console.log(sortArr(arrNum));  //[0, 1, 3, 8, 9, 10, 11, 12, 14, 22, 41, 51, 55]

// 8. Sort 'arrLetters' ascending
// const arrLetters = ['g', 'd', 'a', 'c', 'j', 'b', 'e']
// console.log(sortLetters(arrLetters));  //['a', 'b', 'c', 'd', 'e', 'g', 'j']

// 9.Flat 'arr9'
// const arr9 = [[1, 2], [3, 4, 5], [6, 7, 8, 9]]
// console.log(flatArr(arr9));  //[1, 2, 3, 4, 5, 6, 7, 8, 9]

const arr = ["6", 8, NaN, "0", 5, 4, "true", false, 7, "a", undefined, 8, true];
//1.Show only falsy values in 'arr'
// console.log(falsyValue(arr)); //[NaN, false, undefined]

// const falsyValue = (array) => {
//   let newarr = [];
//   for (let i = 0; i < array.length; i++) {
//     if (!array[i]) {
//       newarr.push(array[i]);
//     }
//   }
//   return newarr;
// };
// console.log(falsyValue(arr));

// 2.Show only string values
// console.log(stringValues(arr)); //['6', '0', 'true', 'a']

// const stringValues = (array) => {
//   let newarr1 = [];
//   for (let i = 0; i < array.length; i++) {
//     if (typeof array[i] === "string") {
//       newarr1.push(array[i]);
//     }
//   }
//   return newarr1;
// };
// console.log(stringValues(arr));

// 3.Slice array from index 3 to 7(includes both indexs)
// console.log(sliceArr(arr));   //['0', 5, 4, 'true', false]

// const sliceArr = (array) => {
//   let newarr1 = [];
//   for (let i = 3; i < array.length - 5; i++) {
//     newarr1.push(array[i]);
//   }
//   return newarr1;
// };
// console.log(sliceArr(arr));

// 4.Sum only number values
// console.log(sumArr(arr)); //32

// const sumArr = (array) => {
//   let newarr1 = [];

//   let sum = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (typeof array[i] == "number" && array[i]) {
//       newarr1.push(array[i]);
//       sum += array[i];
//     }
//   }
//   return sum;
// };
// console.log(sumArr(arr));

//5.Find last 8's index in 'arr'
// console.log(findLastIndex(arr)); //11

// const findLastIndex = (array) => {
//   let newarr1 = [];
//   for (let i = 2; i < array.length; i++) {
//     if (array[i] == 8) {
//       newarr1.push(i);
//     }
//   }
//   return newarr1;
// };
// console.log(findLastIndex(arr));

// 6.Reverse 'arr'
// console.log(reverseArr(arr));  //[undefined, true, 8, undefined, 'a', 7, false, 'true', 4, 5, '0', NaN, 8, '6']

// const reverseArr = (array) => {
//   let newarr1 = [];
//   for (let i = array.length; i > 0; i--) {
//     newarr1.push(array[i]);
//   }
//   return newarr1;
// };
// console.log(reverseArr(arr));

// 7. Sort 'arrNum' ascending
const arrNum = [8, 3, 22, 1, 12, 11, 9, 0, 10, 14, 41, 55, 51];
// console.log(sortArr(arrNum));  //[0, 1, 3, 8, 9, 10, 11, 12, 14, 22, 41, 51, 55]



// 9.Flat 'arr9'
const arr9 = [
  [1, 2],
  [3, 4, 5],
  [6, 7, 8, 9],
];
// console.log(flatArr(arr9));  //[1, 2, 3, 4, 5, 6, 7, 8, 9]


// function flatArr(arr){}