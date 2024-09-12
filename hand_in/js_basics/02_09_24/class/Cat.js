export class Cat {

    constructor(name, color, breed) {
        this.name = name;
        this.color = color;
        this.breed = breed;
    }

    getCatInfo() {
        console.log(`Cat name: ${this.name}, Cat color: ${this.color}, Cat breed: ${this.breed}`);
    }

    setName(newName) {
        this.name = newName
    }
}