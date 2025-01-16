// Write a function calculateDiscount that takes two
// parameters: price and discount (with a default value of 10). The function should
// return the final price after applying the discount.

function calculateDiscount(price, discount = 10) {
    const discountAmount = (price * discount) / 100
    
    const finalPrice = price - discountAmount;
    
    return finalPrice;
}

const originalPrice = 100;
const finalPrice = calculateDiscount(originalPrice);
//console.log(`Final Price after ${10}% discount: ${finalPrice}`); 

const customDiscountPrice = calculateDiscount(originalPrice, 20);
//console.log(`Final Price after ${20}% discount: ${customDiscountPrice}`); 

// ==============================
// Create a function mergeArrays that takes two arrays as parameters and returns a new
// array that combines both arrays using the spread operator.

function mergeArrays(array1, array2) {
    const combinedArray = [...array1, ...array2];
    
    return combinedArray;
}

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const mergedArray = mergeArrays(arr1, arr2);

// console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6]



// ==============================
// Write a function logArguments that takes any number of arguments and logs them to
// the console. Use rest parameters to collect the arguments.
function logArguments(...args) {
    console.log(args);
}

// Example usage:
// logArguments(1, 2, 3); 
// logArguments('a', 'b', 'c', 'd'); 
// logArguments(true, { name: 'Alice' }, [10, 20, 30]); 



//==================================================
// Create a function createMessage that takes a default message and an indefinite
// number of names. The function should return an array of personalized messages for
// each name.
function createMessage(defaultMessage, ...names) {

    for(let name of names){
        console.log(`${defaultMessage}, ${name}!`)
    }
    
}

// createMessage("Welcome", "Rohan", "Sohan", "Suresh");



//========================================================
// Define a function sum that takes three numbers as parameters and returns their sum. Use
// the spread operator to call this function with an array of numbers.
function sum(...args) {
    let total = 0;
    for(let arg of args){
        total = total + arg
    }   
    return total
}

// console.log(sum(1,2,3))


//===========================================
// Write a function createUserProfile that takes three
// parameters: username, age (defaulting to 25), and country (defaulting to "Unknown").
// Return an object with these properties.

function createUserProfile(username, age = 25, country = "Unknown") {
    return {
        username: username,
        age: age,
        country: country
    };
}

const userProfile = createUserProfile("Rohan Singh");
console.log(userProfile);
