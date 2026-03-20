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
console.log(document);
