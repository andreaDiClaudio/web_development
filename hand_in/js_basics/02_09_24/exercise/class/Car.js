export class Car {

    constructor(make, model, year, isRunning) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.isRunning = isRunning
    }

    getCarInfo() {
        console.log(`Car make: ${this.make}, Cat model: ${this.model}, Cat breed: ${this.year}`);
    }

    start() {
        this.isRunning = true;
        const printingStatement = `${this.make} is running...`
        console.log(printingStatement);

        return printingStatement;
    }

    stop() {
        this.isRunning = false;
        const printingStatement = `${this.make} has stopped.`
        console.log(printingStatement);

        return printingStatement;
    }
}