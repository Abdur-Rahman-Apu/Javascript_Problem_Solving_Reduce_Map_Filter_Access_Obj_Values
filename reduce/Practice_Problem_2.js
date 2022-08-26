const people = [
    { name: 'Meena', age: 20 },
    { name: 'Rina', age: 15 },
    { name: 'Suchorita', age: 22 }
];

console.log("Using for loop");

let sum = 0;

for (const value of people) {
    sum += value.age;
}

console.log(sum);

console.log("Using reduce function");

console.log(people.reduce((accumulator, next) => {
    return accumulator + next.age;
    // return accumulator + next.age;

    // return accumulator + next.age;
}, 0));