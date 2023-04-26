//8. Write a function that takes an array of numbers as input and returns the median of the array
// (i.e., the middle number when the array is sorted).

//11 Create a function that takes a string and returns an object with properties representing the frequency of each character in the string
//  For example, if the string contains "hello world", the function should return an object with properties "h", "e", "l", "o", "w", "r", and
//  "d" and values 1, 1, 3, 2, 1, 1, and 1 respectively, indicating that each character occurs once or more in the string.


// function num(a, b) {
    //   if (a > b) return 1;
    //   if (a == b) return 0;
    //   if (a < b) return -1;
    // }
    // arr.sort(num);
    // console.log(arr);


    
const arr = [2, 4, 3, 5, 6];

function median(numbers) {
    const sorted = numbers.sort((a, b) => a - b);  ///[2, 3, 4, 5, 6]
    const middle = Math.floor(sorted.length / 2);
    if (sorted.length % 2 === 0) {
        return (sorted[middle - 1] + sorted[middle]) / 2;
    }
    return sorted[middle];
}
console.log(median(arr)); ///4


/////11
// const str = 'Hello World';
// const empty =[]
// function strg (letter){
//     letter.toLowerCase().split('').forEach(el => {
        
//     });
// }
// console.log(strg(str));