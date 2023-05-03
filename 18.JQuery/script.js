//1

const colors = ["red", "green", "blue", "orange", "brown"];

$("#changeColor").click(function () {
  $("#title").css({ color: colors[Math.floor(Math.random() * colors.length)] });
});

///2
$("#hideTitle").click(function () {
  $("#title").hide();
});
$("#showTitle").click(function () {
  $("#title").show();
});

//3
$.each(colors, function (index, val) {
  console.log(val);
});

//4
const numbers = [4, 2, false, null, "false", NaN, undefined, 8, true, "9"];

let sumNum = 0;
$.map(numbers, function (val, index) {
  if (val) {
    sumNum += index;
  }
  //   return sumNum;
});
console.log(sumNum);

/////Algorithms//////////

////1
function capitalizeFirst(str) {
  let separateWord = str.toLowerCase().split(" ");
  for (let i = 0; i < separateWord.length; i++) {
    separateWord[i] =
      separateWord[i].charAt(0).toUpperCase() + separateWord[i].slice(1);
  }
  return separateWord.join(" ");
}

console.log(capitalizeFirst("This is a title"));
console.log(capitalizeFirst("capitalize every word"));

///2
// function encode(str) {
//   let word = str.toLowerCase().split(" ");
//   for (let i = 0; i < word.length; i++) {
//     if (word[i].length > 4) {
//       word[i].replace(word[i], "*");
//     }
//   }
//   return word;
// }
// console.log(encode("the code is fourty"));
