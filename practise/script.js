//reverse string

let string = "Asadova Fidan";
function reverseStr(str) {
  return str.split("").reverse().join("");
}
console.log(reverseStr(string));

//polidrom

function isPolidrom(word) {
  if (word === word.split("").reverse().join("")) {
    return `Yes, ${word} is polidrom`;
  } else {
    return `No, ${word} is not polidrom`;
  }
}
console.log(isPolidrom("dad"));

//remove dublicated

//// method 1

let arry = [1, 2, 2, 3, 3, 5, 6, 6, 8, 9];

function removeArr(arr) {
  return arr.filter((el, i) => arr.indexOf(el) == i);
}
console.log(removeArr(arry));

/////method 2

// function newRemoveArr (newArr){
//     let result = [];
//     newArr.forEach((e, i) => {
//         !result.includes(e) && result.push(e);
//     });
//     return result;
// }
// console.log(newRemoveArr(arry));

/////method 3

// let mySet = new Set (arry);
// console.log([...mySet]);
// console.log(mySet);

/////method 4

// function removeSet(arr1){
//     return [...new Set(arr1)]
// }
// console.log(removeSet(arry));

//generate otp

function generateOtp() {
  let empty = "0123456789";
  let empty1 = "";
  for (let i = 0; i < 4; i++) {
    empty1 += empty[Math.floor(Math.random() * 10)];
  }
  return empty1;
}
console.log(generateOtp());

