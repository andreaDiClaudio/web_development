import { Car } from "./Car.js";
import { Cat } from "./Cat.js";


/*Cat exercises*/
console.log(`\n***CAT EXERCISE***\n`);
const cat = new Cat("Cornelius", "Green", "Siamese")

cat.getCatInfo()
cat.setName("Andrea");

console.log(`\nAFTER CHANGING NAME\n`);

cat.getCatInfo()

/*Car exercises*/
console.log(`\n***CAR EXERCISE***`);
const car1 = new Car("make 1", "model 1", 1996);
car1.getCarInfo()
car1.start()
car1.stop()

console.log();
const car2 = new Car("make 2", "model 2", 2024);
car2.getCarInfo()
car2.start()
car2.stop()