//Create a function that reverses a string:
//'Hi My name is Eugene' should be
//'eneguE si eman yM iH

// BRUTE FORCE SOLUTION
function reverse(str) {

    // Check Input 
    if (typeof str !== "string" || !str || str.length > 2) {
        return "Check your input"
    }

    const newArr = []

    for (let i = str.length - 1; i >= 0; i--) { // O(n)
        newArr.push(str[i])
    }

    return newArr.join("")
}



// USING BUILT IN JAVASCRIPT METHODS
function reverse2(str) {
    const newArr = [];

    [...str].reverse().forEach(c => newArr.push(c))

    return newArr.join("");
}

const reverse3 = str => [...str].reverse().join


