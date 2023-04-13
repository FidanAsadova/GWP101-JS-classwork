//1
const arr1 = ["a", "b", "c", "d", "e", "f", "j", "k", "y", "u"];
function getRandomletter(abcd) {
  return arr1[Math.floor(Math.random() * arr1.length)];
}
console.log(getRandomletter(arr1));

//2
// const arr2 = [1, 2, 3, 4, 14, 5, 6, 8];

// let sum = 0;
// function calcSum() {
//   for (let i = 0; i < arr2.length; i++) {
//     if (arr2[i] % 2 == 0) {
//       sum += arr2[i];
//     }
//   }
//   return sum;
// }
// console.log(calcSum(arr2));

///////////////////////////////
const arr2 = [1, 2, 3, 4, 14, 5, 6, 8];
let sum1 = 0;
function calcSum() {
  for (let item of arr2) {
    if (item % 2 == 0) {
      sum1 += item;
    }
  }
  return sum1;
}
console.log(calcSum(arr2));

//3
const arr3 = [-3, -5, -9, 3, 0, true, false, -22];
const positiviteArray = [];
const getPositiveNumber = function () {
  for (let item of arr3) {
    positiviteArray.push(Math.abs(item));
  }
  return positiviteArray;
};
console.log(getPositiveNumber(arr3));

//4