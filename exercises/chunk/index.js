// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    let result = []
    let dex = 0
    for(let i=0; i<array.length/size; i++){
        result.push(array.slice(dex,size+dex))
        dex += size
    }
    return result
}

// first attempt
// function chunk(array, size) {
//     let result = []
//     for(let i=0; i<array.length/size; i++){
//         result.push([])
//     }

//     let count = 0
//     for (let i=0; i<array.length; i++){
//         result[count].push(array[i]);
//         if((i+1) % size === 0){
//             count++
//         }
//     }

//     return result
// }

module.exports = chunk;
