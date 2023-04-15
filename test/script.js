// let arr = [4, 8, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1 , 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6,3, 7, 3, 7]

//2
let arr1 = [2, 4, -3, -43, 41, -3];

console.log(arr1.filter((elm) => elm > 0));

function isTriangle(a, b, c) {
  if (
    a ** 2 + b ** 2 == c ** 2 ||
    a ** 2 + c ** 2 == b ** 2 ||
    c ** 2 + b ** 2 == a ** 2
  ) {
    return "yes";
  } else {
    return "no";
  }
}
console.log(isTriangle(3, 4, 5));
console.log(isTriangle(6, 8, 10));
console.log(isTriangle(15, 20, 25));

//3
const arr3 = [
  "Finland",
  "Danmark",
  "Sweden",
  "Azerbaijan",
  "Norway",
  "Iceland",
];
function isC(city) {
  // arr3.find((city)=>(Math.max(city.length)))
  // return city
  let lengthArray = city.map((el) => el.length);
  return city.find((el) => el.length == Math.max(...lengthArray));
}
console.log(isC(arr3));

//4
let webTechs = ["html", "css", "js", "react", "node"];

///5
let arr2 = [
  {
    name: "test",
    key: 9,
  },
  {
    name: "task",
    key: 4,
  },
  {
    name: "tanqo",
    key: 3,
  },
  {
    name: "like",
    key: 2,
  },
  {
    name: "task",
    key: 5,
  },
  {
    name: "trust",
    key: 8,
  },
  {
    name: "test",
    key: 12,
  },
  {
    name: "last",
    key: 6,
  },
  {
    name: "tanqo",
    key: 1,
  },
  {
    name: "elephant",
    key: 13,
  },
  {
    name: "love",
    key: 11,
  },
  {
    name: "small",
    key: 7,
  },
  {
    name: "little",
    key: 10,
  },
];

console.log(
  arr2.filter((element) => element.name[0].toLocaleLowerCase() === "t")
);

//6

console.log(
  arr2.filter(
    (elem) =>
      elem.name[0].toLocaleLowerCase() === "t" &&
      elem.name[elem.name.length - 1].toLocaleLowerCase() === "t"
  )
);
///7
function nameL(index) {
  let lengthName = index.map((el) => el.name.length);
  return index.find((el) => el.name.length == Math.max(...lengthName).key);
}
console.log(nameL(arr2));

///8

let newArr = arr2.filter((el) => el.key > 10 && el.name.startsWith("l"));
console.log(newArr);

////9
let keysArr = arr2.map((el) => el.key);
let arr2new = [arr2.find((el) => el.key == Math.max(...keysArr))];
console.log(arr2new);
