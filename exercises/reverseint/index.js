// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    let str = n
        .toString()
        .split('')
        .reduce((rev, char)=>{
            return char + rev
        }, "")
    return parseInt(str) * Math.sign(n)
}

// first attempt
// function reverseInt(n) {
//     let str = n+"";
//     let newNum = str.split("").reduce((rev, char)=>{
//         return char + rev
//     },"")
//     return newNum.includes("-") ? newNum.substring(0,newNum.length-1)*-1 : newNum*1
// }

module.exports = reverseInt;
