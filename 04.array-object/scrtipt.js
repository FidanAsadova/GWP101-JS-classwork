//8

const obj = {
  id: 1,
  firstName: "Fidan",
  lastName: "Asadova",
  location: "GDU 2",
};

//9
const obj2 = obj;
console.log(obj2);


//10
obj.id = 3;
console.log(obj);

//11
for (let key in obj) {
  console.log(key);
}

//12
for (let key in obj) {
  console.log(obj[key]);
}

//13
delete obj.location;
console.log(obj);

//14
const newObj = Object.assign(obj);
console.log(newObj);


//1
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr1);


//2
const arr2 = [0, true, "code"];
console.log(arr2);


//3
const arr3 = [1, 2, 3, 4];
console.log(arr3);
const arr4 = arr3;
console.log(arr4);



//4
const arr5 = [1, 2, 3, 4, 5, 6];
arr5.push(8, 9);
console.log(arr5);

//5
const arr6 = [];
arr6.push(5, 6, 7);
arr6[0] = 1;
console.log(arr6);

//6
const arr7 = ["Fidan", "Asadova", 21, "Quba"];
console.log(arr7);
arr7[3] = "Qusar";
console.log(arr7);

//7
for (let num of arr1){
console.log(num);
}
