// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    const matched = str.match(/[aeiou]/gi)
    return matched ? matched.length : 0
}

// first attempt
// function vowels(str) {
//     const vowels = {
//         'a': 0,
//         'e':0,
//         'i':0,
//         'o':0,
//         'u':0
//     }
//     let count = 0
//     str = str.toLowerCase()
//     for (let char of str){
//         if (vowels[char] !== undefined){
//             count ++
//         }
//     }
//     return count
// }


module.exports = vowels;
