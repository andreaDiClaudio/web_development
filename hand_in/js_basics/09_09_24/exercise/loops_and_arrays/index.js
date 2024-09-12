//Create array with values
const myArray = ['Peter', 7, 'Marianne', true, 'Helle', 8];

//Use a loop to iterate over the array 
myArray.forEach((item) => {
    console.log(`${item} is a ${typeof item}`);
})