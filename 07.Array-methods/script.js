///'//// 1.Spline methods;

const arr1 = ["a", "b", "c", "d", "e"];

//1
// arr1.splice(1, 1)
// console.log(arr1);

// arr1.splice(1, 3)
// console.log(arr1);

// arr1.splice((arr1.length -1))
// console.log(arr1);

// arr1.splice(2, (arr1.length -1))
// console.log(arr1);

// arr1.splice(3, 0, "3", "4")
// console.log(arr1);

// arr1.splice(0, 2, "A", "B")
// console.log(arr1);

/////////////////////////////////////////2.Slice method

const arr2 = ["user1", "user2", "user3", 11, 3, 5];

// const newArr = arr2.slice()
// console.log(newArr);

// const newArr1 = arr2.slice(1, 5)
// console.log(newArr1);

// const newArr3 = arr2.slice(2, (arr2.length))
// console.log(newArr3);

////////////////////////////////3.Concat method

const arr3 = [1, 2, 3];
const arr33 = [4, 5, 6];

// const newarr1 = arr3.concat(arr33)
// console.log(newarr1);

// const newarr2 = arr3.concat(['a', 'b'])
// console.log(newarr2);

/////////////////////////  4. forEach method
const arr4 = ["name", "surname", 10, "age", "city", "uni", 88, 20];

///1
arr4.forEach((item) => {
  console.log(item);
});

///2
arr4.forEach((element) => {
  if (typeof element === "number") {
    console.log(element * 2);
  }
});

//////////////////////////////5.Map method
//1
const arr5 = [4, 5, 6, "2", 6, true, undefined, "55"];
const newArr5 = arr5.map((elm) => {
  console.log(elm);
});

///2
const newArr6 = arr5.map((elem) => {
  if (typeof elem === "number") {
    console.log(elem * 5);
  }
});

//3
const newArr7 = arr5.map((elem) => {
  console.log(String(elem));
});

///4
const newArr8 = arr5.map((elem) => {
    console.log(Boolean(elem));
  });

  //5
  const newArr9 = arr5.map((elem) => {
    console.log(Number(elem));
  });
