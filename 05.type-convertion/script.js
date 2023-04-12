//1
let myText =
  "an array is a collection og item of same data type stored at contiguous memory  locations.";
// console.log(myText.length);
let count = 0;
for (let i= 0; i<myText.length; i++){
    if(myText[i]=="a" || myText[i]=="A"){
        count++;
    }
}
console.log(count);

//2
const arr1 = [1, 2, 4, 5, 7, 9, 13, 22];
let sum = 0;
for (let i = 0; i < arr1.length; i++) {
  sum += arr1[i];
}
console.log(sum);

//3
const arr2 = [false, 0, 2, true, 23, undefined, "are u stack?", "come on"];
let arr2Str = [];
for (let x = 0; x < arr2.length; x++) {
  if (x % 2) {
    arr2Str.push(arr2[x]);
  }
}
console.log(arr2Str);

//4
let text1 = "How is it going?";
let newStr = "";
for (let i = 0; i < text1.length; i++) {
  if (text1[i] != "i") {
    newStr += text1[i];
  }
}
console.log(newStr);

//5
const numberArr = [2, false, "5", "true", 9, 0, "i"];
let sumnum = 0;
for (let i = 0; i < numberArr.length; i++) {
  if (typeof numberArr[i] == "number") {
    sumnum += numberArr[i];
  }
}
console.log(sumnum);

//6
const mixType = [1, "3", 4, false, null, 22, true];
let mixStr = [];
for (let i = 0; i < mixType.length; i++) {
  mixStr.push(String(mixType[i]));
}
console.log(mixStr);

//7
const myObj = {
    color: 'red',
    width: 320,
    height:200,
    padding: 4,
    fontsize: '22px'
}
let multi = 1;
for(let value in myObj){
    if(typeof myObj[value]=="number"){
        console.log(myObj[value]*2);
    }
}

