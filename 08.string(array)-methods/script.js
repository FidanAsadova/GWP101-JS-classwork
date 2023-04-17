// 1.Write a function called: 'getUpper(anyArr)' that returns the newArr with the uppercased first and last character.
// const arr1 = ['guba', 'mingecevir', 'baku', 'gazag', 'gence', 'shirvan']
// console.log: ['GubA', 'MingeceviR', 'BakU', 'GazaG', 'GencE', 'ShirvaN']

// 2.String and Array
// let text = 'We are MERN-Stack developers'

// 1.Replace 'MERN Stack' with 'Front-end'.  // We are Front-end developers!
// 2.Replace all 'e' with 'a'. // wa ara marn-stack davalopars!
// 3."in Microsoft!" concat to 'text'. //We are MERN-Stack developers in Microsoft!
// 4.Find index of each 'r' and collect them in a new Array called 'newArr'  //[4, 9, 26]
// 5.Find index of first 'r' (excepting 'are').  // 9
// 6.Find out vowels in 'text' and add them to 'newArr' which contains unique values. //['e','a','o']
// let vowels = ['a', 'i', 'o', 'u', 'e']

// 3.Write a function(arrow function) called 'calcArea()' which to calculate sum region's area,
//  if region's length is equal to 6 in 'arr2'.
// const arr3 = [
//     {
//         region: 'Yasamal',
//         area: 170,
//     },

//     {
//         region: 'Nizami',
//         area: 20,
//     },

//     {
//         region: 'Nesimi',
//         area: 10,
//     },

//     {
//         region: 'Sebail',
//         area: 30,
//     },
//     {
//         region: 'Xetai',
//         area: 30,
//     },

// ]

// console.log: (60)

// 4.Sort 'arr3' ascending order.
// const arr4 = [8, 44, 14, 2, 23, 1, 22, 34, 9, 0, 6]

// console.log: [0, 1, 2, 6, 8, 9, 14, 22, 23, 34, 44]

// 5.Gather all nested array in one array.
// const arr5 = [5, [8], [9, ['hi', ["don't touch me"], [0]], '9']]

// console.log: [5, 8, 9, 'hi', "don't touch me", 0, '9']

// 6.Sort array "colors" with color's length, if color's length is equal to each other sort them alphabetically.
// const colors = ['green', 'blue', 'yellow', 'black', 'red', 'brown', 'white', 'gray', 'violet', 'pink']

// console.log: ['red', 'blue', 'gray', 'pink', 'black', 'brown', 'green', 'white', 'violet', 'yellow']

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///1
const arr1 = ["guba", "mingecevir", "baku", "gazag", "gence", "shirvan"];

const newName = arr1.map(
  (items) =>
    items[0].toUpperCase() + items.slice(1, -1) + items.at(-1).toUpperCase()
);
console.log(newName);

////2
let text = "We are MERN-Stack developers";
// 1.Replace 'MERN Stack' with 'Front-end'.  // We are Front-end developers!

const newText = text.replace("MERN-Stack", "Front-end");
console.log(newText);

// 2.Replace all 'e' with 'a'. // wa ara marn-stack davalopars!
const newText1 = text.toLowerCase().replaceAll("e", "a");
console.log(newText1);

//3
// 3."in Microsoft!" concat to 'text'. //We are MERN-Stack developers in Microsoft!
const newtext2 = text.concat(" in Microsoft!");
console.log(newtext2);

// 4.Find index of each 'r' and collect them in a new Array called 'newArr'  //[4, 9, 26]

let text1 = "We are MERN-Stack developers";
let newArr = [];

text1.split("").map((el, i) => {
  if (el.toLocaleLowerCase() === "r") {
    newArr.push(i);
  }
  return newArr;
});
console.log(newArr);

// 5.Find index of first 'r' (excepting 'are').  // 9

const newText7 = text.toLocaleLowerCase().indexOf("r", 5);
console.log(newText7);

//6.Find out vowels in 'text' and add them to 'newArr' which contains unique values. //['e','a','o']
let vowels = ["a", "i", "o", "u", "e"];
let emptyArr = [];

let textinc = text.split("").forEach((element) => {
  vowels.includes(element) ? emptyArr.push(element) : undefined;
});
console.log(emptyArr);

// 3.Write a function(arrow function) called 'calcArea()' which to calculate sum region's area,
//  if region's length is equal to 6 in 'arr2'.

const arr3 = [
  {
    region: "Yasamal",
    area: 170,
  },

  {
    region: "Nizami",
    area: 20,
  },

  {
    region: "Nesimi",
    area: 10,
  },

  {
    region: "Sebail",
    area: 30,
  },
  {
    region: "Xetai",
    area: 30,
  },
];

let sum = 0;
let calcArea = (names) =>
  names.reduce(
    (sum, current, index) =>
      current.region.length == 6 ? sum + current.area : sum,
    0
  );
console.log(calcArea(arr3));
// let sum = 0;
// let result = arr3.reduce(
//   (sum, current, index) => (current.region.length == 6 ? sum + current.area : sum),
//   0
// );

// console.log(result);

// 4.Sort 'arr3' ascending order.
const arr4 = [8, 44, 14, 2, 23, 1, 22, 34, 9, 0, 6];
const arr4Sort = arr4.sort((a, b) => a - b);
console.log(arr4Sort); /////

// 5.Gather all nested array in one array.
const arr5 = [5, [8], [9, ["hi", ["don't touch me"], [0]], "9"]];
const arr5Flat = arr5.flat(3);
console.log(arr5Flat);

// 6.Sort array "colors" with color's length, if color's length is equal to each other sort them alphabetically.
// console.log: ['red', 'blue', 'gray', 'pink', 'black', 'brown', 'green', 'white', 'violet', 'yellow']

const colors = [
  "green",
  "blue",
  "yellow",
  "black",
  "red",
  "brown",
  "white",
  "gray",
  "violet",
  "pink",
];
const colorsSort = colors.sort((a, b) =>
  a.length == b.length ? a.localeCompare(b) : a.length - b.length
);
console.log(colorsSort);
