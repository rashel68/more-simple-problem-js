function animalCounter(miles) {
    let mile1st = 10;
    let mile2nd = 50;
    let lastMile = 100;
    if (miles <= 10) {
        let mile1stAnimal = mile1st * miles;
        return mile1stAnimal;
    }
    else if (miles <= 20) {
        let beforeFirst = mile1st * 10;
        let secondRestMile = miles - 10;
        let mile2ndAnimal = mile2nd * secondRestMile;
        let secondTotal = beforeFirst + mile2ndAnimal;
        return secondTotal;
    }
    else {
        let beforeFirst = mile1st * 10;
        let beforSecond = mile2nd * 10;
        let thirdRestMile = miles - 20;
        let mile3rdAnimal = lastMile * thirdRestMile;
        let totalAnimal = beforeFirst + beforSecond + mile3rdAnimal;
        return totalAnimal;
    }
}

let inputAnimal = 25;
const totalAnimals = animalCounter(inputAnimal);
// console.log(totalAnimals);