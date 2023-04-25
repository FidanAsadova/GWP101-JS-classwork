

// function isAnogram(str1, str2) {
//     return str1.toLowerCase().split("").sort((a, b)=> a.localeCompare(b)).join("")===str2.toLowerCase().split("").sort((a, b)=> a.localeCompare(b)).join("");
// }
// console.log(isAnogram("Suga", "Gsua"));
// console.log(isAnogram('Taehyung', "thyng"));


// let max = 0;
// let maxLetter = "";
// function maxChar (str){
//     return str.split('').map((a)=>{
//         if(max = str.split(a).length -1 > max){

//         }
//     })
// }

function maxChar(str){
    let myAllCase =0;
    let myResultLetter = '';
    str.split('').map((letter)=>{
        if(str.toLowerCase().split(letter).length >myAllCase){
            myAllCase = str.toLowerCase().split(letter).length
            myResultLetter = letter
        }

    })
    return myResultLetter;
}
console.log(maxChar("Tlffaft")); //t
console.log(maxChar("egnecg")); // e