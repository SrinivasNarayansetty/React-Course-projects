//arguments object - no longer bound with arrow functions
//this keyword is no longer bound with arrow functions 
const add = (a,b) => {
    return a + b;
}

console.log(add(55, 1, 1001));


//this keyword no longer used

// const user = {
//     name: 'Srinivas',
//     cities: ['delhi', 'gurgaon', 'Vizag'],
//     printPlacedLived: function() {
//         this.cities.forEach((city) => {
//             console.log(this.name + ' lived in ' + city);
//         });
//     }
// }

// Map usage 
const user = {
    name: 'Srinivas',
    cities: ['delhi', 'gurgaon', 'Vizag'],
    printPlacedLived: function() {
        return this.cities.map((city) => this.name + ' lived in ' +city );
    }
}

console.log(user.printPlacedLived());

const multiplier = {
    //numbers - array of numbers 
    //multiplyBy bu single by number 
    //multiply - return the numbers have been ultiplied
    numbers: [6,7,8,9,10,11],
    multiplyBy: 5,
    multiply: function() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
}
console.log(multiplier.multiply());