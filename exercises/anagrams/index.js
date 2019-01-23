// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    const mappedA = mapStr(stringA)
    const mappedB = mapStr(stringB)

    if(Object.keys(mappedA).length !== Object.keys(mappedB).length){
        return false
    }
    
    for(key in mappedA){
        if(mappedA[key] !== mappedB[key]){
            return false
        }
    }
    return true
}

function mapStr(str){
    let obj = {}
    for(let char of str.replace(/[^\w]/g,"").toLowerCase()){
        obj[char] ? obj[char]+1 : obj[char] = 1
    }
    return obj
}

//first attempt
// function anagrams(stringA, stringB) {
//     const strA = convertStr(stringA)
//     const strB = convertStr(stringB)
//     if(strA.length !== strB.length){
//         return false
//     }
//     const objA = mapStr(strA)
//     const objB = mapStr(strB)
//     let result = true
//     for(key in objA){
//         if(objA[key] !== objB[key]){
//             result = false
//         }
//     }
//     return result
// }

// function convertStr(str){
//     return str.replace(/[^\w]/g, "").toLowerCase()
// }

// function mapStr(str){
//     let obj = {}
//     for(char of str){
//         obj[char] ? obj[char]+1 : obj[char] = 1
//     }
//     return obj
// }

module.exports = anagrams;
