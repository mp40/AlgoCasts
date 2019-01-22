// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let strObject = {}
    let count = 0
    let keyName = undefined

    for(char of str){
        strObject[char] ? strObject[char]+1 : strObject[char] = 1
    }
    
    for(key in strObject){
        if(strObject[key]>count){
            count = strObject[key]
            keyName = key
        }
    }
    return keyName
}

//first attempt
// function maxChar(str) {
//     const strArray = str.split('')
//     let strObject = {}
//     let count = 0
//     let keyName = undefined
//     strArray.forEach((s)=>{
//         if(!strObject[s]){
//             strObject[s] = 1
//         } else {
//             strObject[s] ++
//         }   
//     })
//     for(key in strObject){
//         if(strObject[key]>count){
//             count = strObject[key]
//             keyName = key
//         }
//     }
//     return keyName
// }

module.exports = maxChar;
