//1. Create an array with 5 names
const names = ["Andrea", "Fernanda", "Daniel", "Robert", "Christian"];

//2. Use the indexOf function to get the index of a name
console.log(names.indexOf("Daniel"));

//3. Try the indexOf function with a name that does not exist.
console.log(names.indexOf("Martin"));

//4. Use the push function to add a new name
names.push("Martin")
console.log(names);

//5. Use the slice function on the array
const slicedNames = names.slice(0, 3);
console.log(slicedNames);

//6.1 Create 2 objects
const person1 = {
    firstName: "Andrea",
    lastName: "Di Claudio",
    email: "andrea@email.com"
}

const person2 = {
    firstName: "Christian",
    lastName: "Teacher",
    email: "Christian@email.com"
}

//6.2 Add the two objects to anew array.
const people = [];
people.push(person1)
people.push(person2);

console.log(people);

console.log(`${people[0].firstName}'s email: ${people[0].email}`);

