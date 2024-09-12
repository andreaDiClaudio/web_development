
/* 02/09/24 */
//1. Create a javascript function that takes firstname and lastname as 2 parameters and uses console.log() to output the person's name. Check that it works and is printed correctly.
function printInfo(firstName, lastname) {
    console.log(`First Name: ${firstName}, Last Name: ${lastname}`);
}

//2. Create a function that calculates the area of a rectangle. The function should return the result.
function calculateRectangleArea(width, length) {
    const area = width * length;
    console.log(`Rectangle Area: ${area}`);
    return area;
}

//3. Create a function that takes speed and time as 2 parameters and calculates and returns the distance.
function calculateDistance(speed, time) {
    const distance = speed * time;
    console.log(`You have travelled ${distance}km`);
    return distance;
}

//4. Create an object called calculator e so the 3 previous functions are attached to the object.
const calculator = {
    ownerName: "Andrea",
    printInfo: printInfo,
    calculateRectangleArea: calculateRectangleArea,
    calculateDistance: calculateDistance
}

calculator.printInfo("Andrea", "Di Claudio");
calculator.calculateDistance(12, 3);
calculator.calculateRectangleArea(23, 56);