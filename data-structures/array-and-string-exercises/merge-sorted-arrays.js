//Create a function that merge Two Sorted Arrays:
// [0,3,4,31] [4,6,30]
//'[0, 3, 4, 4, 6, 30, 31]

function mergeSortedArrays(arr1, arr2) {
    const mergeArrays = []
    let arr1Item = arr1[0]
    let arr2Item = arr2[0]
    let i = 1;
    let j = 1;

    // Check inputs
    if (arr1.length == 0) {
        return arr2
    }
    if (arr2.length == 0) {
        return arr1
    }

    while(arr1Item || arr2Item) {
        // check the two array items and also check for undefined
        if (!arr2Item || arr1Item < arr2Item) {
            mergeArrays.push(arr1Item)
            arr1Item = arr1[i]
            i++
        } else {
            mergeArrays.push(arr2Item)
            arr2Item = arr1[j]
            j++
        }

    }

    return mergeArrays
}


mergeSortedArrays([0,3,4,31], [4,6,30]) 


  