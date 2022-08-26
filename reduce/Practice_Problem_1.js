const arr = [1, 9, 17, 22];

let sum = 0;
for (const value of arr) {
    sum += value;
}

console.log("Using for loop. Sum is: ", sum);


console.log("Sum using reduce: ");

console.log(arr.reduce((previous, next) => previous + next, 0));