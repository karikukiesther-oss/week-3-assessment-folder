//use a for loop to print numbers from 1 to 20
console.log("Numbers from 1 to 20:");
for (let i = 1; i <= 20; i++) {
    console.log(i);
}
//print only even numbers from 1 to 20
console.log("Even numbers from 1 to 20:");
for (let i = 1; i <= 20; i ++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
//print only odd numbers from 1 to 20
console.log("Odd numbers from 1 to 20:");
for (let i = 1; i <= 20; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}
//calculate and display the sum of numbers from 1 to 20
let sum = 0;
for (let i = 1; i <= 20; i++) {
    sum += i;
}
console.log("Sum of numbers from 1 to 20: " + sum);
console.log("Total sum: " + sum);

//print numbers from 20 to 1
console.log("Numbers from 20 to 1:");
for (let i = 20; i >= 1; i--) {
    console.log(i);
}