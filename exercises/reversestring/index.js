// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// without using native methods
function reverse(str) {
    let reversed = ''
    for(char of str){
        reversed = char + reversed
    }
    return reversed
}

// easy way
// function reverse(str) {
//     let strArray = str.split("")
//     strArray.reverse()
//     return strArray.join("")
// }

module.exports = reverse;
