// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    let strArray = str.split("")
    strArray.reverse()
    const result = strArray.join("")
    return result 
}

module.exports = reverse;
