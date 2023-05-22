//task 1
// function func1(num) {
//   let answer = 1;
//   if (num == 0 || num == 1) {
//     return answer;
//   } else if (num > 1) {
//     for (let i = num; i >= 1; i--) {
//       answer = answer * i;
//     }
//     return answer;
//   } else {
//     return 1;
//   }
// }

//
// console.log(func1(-1));

// program to find the factorial of a number
// function factorial(x) {

//     // if number is 0
//     if (x === 0) {
//         return 1;
//     }else {
//         return x * factorial(x - 1);
//     }
// }
// console.log(factorial(4));

// task2

///
// function func2(num) {
//   let answer = 1;
//   if (num == 0 || num == 1) {
//     return answer;
//   } else if (num > 1) {
//     for (let i = num; i >= 1; i -= 2) {
//       answer = answer * i;
//     }
//     return answer;
//   } else {
//     return 1;
//   }
// }

// function func2(x) {
//     if (x === 0) {
//         return 1;
//     }else {
//         return x>0 ? x * func2(x - 2);
//     }
// }

// console.log(func2(5));
// console.log(func2(9));
// console.log(func2(1));

// task 3
// function sumArray(arr){

// }

// function sumArray(num) {
//     sum = 0;
//     for (a = 0; a < num.length; a++) {
//         if (typeof num[a] == 'number') {
//             sum += num[a];
//         } else if (num[a] instanceof Array) {
//             sum += sumArray(num[a]);
//         }
//     }
//     return sum;
// }

// console.log(sumArray([4, [2, [1]], 8]));
// console.log([4, [2, [1]], 8].length);
