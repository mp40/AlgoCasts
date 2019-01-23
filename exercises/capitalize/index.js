// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    let strArray = str.split(" ")
    let result = ""
    for(let word of strArray){
        let firstLetter = word.slice(0,1).toUpperCase()
        let remaining = word.slice(1)
        result = result + firstLetter + remaining + " "
    }
    return result.slice(0, result.length-1)   
}

module.exports = capitalize;
