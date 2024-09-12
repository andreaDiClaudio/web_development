//Create a function, findLargest
function findLargest(num1, num2, num3, num4) {
    return Math.max(num1, num2, num3, num4);
}

const largestNumber = findLargest(12, 34, 120, 98);
console.log(largestNumber);


//Create a function to check if number is in range
function isInRage(numberTocheck, min, max) {
    if (numberTocheck > min && numberTocheck < max) {
        return true;
    } else {
        return false;
    }
}

console.log(isInRage(0, 2, 45));
