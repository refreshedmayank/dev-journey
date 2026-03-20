function add(x,y){
  let add_variable = x+y;
  console.log(add_variable)
}
add(2,3);

function Greet(Name){
  console.log(`Hello ${Name}, Welcome to javascript!`);
  console.log(`So where are your from ${Name}?`);
  console.log(`May i know your age ${Name}?`);
  console.log(`OKAY ${Name}, I hope you have a great day!`);
  console.log(`Bye ${Name}, Nice talking to you!`);
}
Greet("Mayank");
Greet("Rohit");
Greet("Satyarth");
Greet("Rohit");
Greet("Rohit");

function hi (){
Greet("Rohit");
  console.log("Hello")
}
hi();
hi();
hi();

let count = 6;
if (count < 5) {
  console.log("Count is smaller than 5 number");}
  else if (count > 5) {
  console.log("Count is greater than 5");}
else if (count == 5){
    console.log("count is equal to 5");}

for (let num = 0; num <10; num++){
  console.log(`Number ${num}`);
}

let a = 0;{
  while (a < 10);{
    console.log(`number ${a}`);
    a++;
  }
}
// arrow functions
const greet = (Name) => console.log(`Hello ${Name}, How are you?`);
greet("Mayank");
greet("Rohit");

const add = (x,y) => console.log(x+y);
add(2,3);
const Birthday = (Name, Age) => console.log(`Happy Birthday to you ${Name}! You are now ${Age} years old!`);
Birthday("Mayank", 21);
Birthday("Rohit", 22);
// arrays
let Fruits = ["Apple", "Banana", "Mango", "Grapes"];
console.log(Fruits)
console.log(Fruits[0]);
console.log(Fruits[1])
console.log(Fruits[3])
console.log(Fruits.length);
// adding the objects
Fruits.push("Orange");
//removing the objects in the end of the array
Fruits.pop();
console.log(Fruits)
Fruits.unshift("Pineapple");
console.log(Fruits);
Fruits.shift();
console.log(Fruits)
//find the index of the element
console.log(Fruits.indexOf("Mango"));
// cheaking if the element is present in the array or not
console.log(Fruits.includes("Banana"));
console.log(Fruits.includes("Orange"));
// looping through the array
Fruits.forEach(fruit => console.log(fruit));
//mapping the array
const numbers = [1,2,3,45,6,7,8,9,10];
const squaredNumbers = numbers.map(num => num*num);
console.log(squaredNumbers);
//filtering the array
const biggerThank5 = numbers.filter(num => num>5);
console.log(biggerThank5);
