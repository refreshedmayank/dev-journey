// Day 3
// 1
const wishes = (Name, Age) => console.log(`Happy Birthday to you ${Name}, you are now tuned ${Age} years old today`)
wishes("Mayank", 21);
wishes("Rohit", 20);
// 2
const add = (x,y) => console.log(`The sum of ${x} and ${y} is ${x+y}`)
add(5,10);
add(15,20);
// 3
const subtract = (x,y) => console.log(`The difference of ${x} and ${y} is ${x-y}`)
subtract(10, 5);
subtract(20, 15);
subtract(30, 20);
// normal function
function wishes_second(Name, Age){
  console.log(`Happy Birthday to you ${Name}, You are now turned ${Age} years old today`)
}
function add_second(x,y){
  console.log(`The sum of ${x} and ${y} is ${x + y}`)}
function subtract_second(x,y){
  console.log(`The difference of ${x} and ${y} is ${x-y}`);
}// calling all the functions
wishes_second("Mayank",21);
add_second(5,10);
subtract_second(10,5);
// arrays
const numbers = [1,2,3,4,5,6,7,8,9,10];
const names = ["Mayank", "Rohit", "Satyarth", "Anshul", "Shivam"];
console.log(numbers);
console.log(names);
console.log(numbers[1])
console.log(names[3]);
//lopping through arrays
numbers.forEach(num => console.log(num));
names.forEach(Name => console.log(Name));

// while loops
let i = 0
while (i < 20) {
  console.log(i);
  i++;
}
let digit = 0
while (digit < 7){
  console.log(`digit is ${digit}`);
  digit++;
}
// datatypes
let string = "Hello world";
let integer = 42;
let float = 3.14;
let boolean = true;
let array = [1,2,3,4,5,6,7,8,9,10]
//printing
console.log(string);
console.log(integer);
console.log(float);
console.log(boolean);
console.log(array);
// printing their datatypes
console.log(typeof string);
console.log(typeof integer);
console.log(typeof float);
console.log(typeof boolean);
console.log(typeof array);
// array printing
console.log(array[6]);
console.log(array.length);

