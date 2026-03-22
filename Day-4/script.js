// day -4
// objects
const Person1 = {
  First_name: "Rohit",
  last_name: "sharma",
  age: 21,
  is_kid: false,
  say_hello(){ console.log("Hello, im Rohit sharma")},
  Eat() { console.log("Im eating chicken biryani")}
}
   console.log(Person1.First_name);
   console.log(Person1.last_name);
   console.log(Person1.age);
   console.log(Person1.is_kid);

const Person2 = {
  First_name: "vaishali",
  last_name: "sharma",
  age: 15,
  is_kid: true,
  say_hello(){
    console.log("Hi, My name is vaishali")
  },
  eat() { console.log("Im eating cakes")}
}
console.log(Person2.First_name);
console.log(Person2.last_name);
console.log(Person2.age);
console.log(Person2.is_kid);
Person1.say_hello();
Person2.say_hello();
Person2.eat();
//dom - we can manipulate document
console.log(document)
//event listeners - execute a specific code when user does something (when user hover to soecific area, click, scroll etc.)
let button = document.getElementById("button")
button.addEventListener("click", function(){
  // alert("you clicked me")
  button.style.backgroundColor = "black"
  button.style.color = "white"
  button.style.fontSize = "300px"
})
// fetch - fetching data from the resource api - will take time to fetch fully - gives response object ont the actuall object so we stored in response.jason it will take time too thats why again await
// await-> tells - wait for the response to come back before moving to the next line of code
// we used response varible for to contain resourse data and we used userdata to store response
//async -
async function userinfo (){
  const response = await fetch('api from the user info is located')
  const userdata = await response.json()
  console.log("username is:" + userdata.name);
}
userinfo(); // calling the function
// with error handling
// try - we know that there will be error if for example the intenret is down
// catch - moves to new code -> printing there is something wrong displaying error
async function userinfo (){
  try {
  const response = await fetch('api from the user info is located')
  const userdata = await response.json()
  console.log("username is:" + userdata.name);
  } catch(error) {
    console.log("Oops something went wrong! Error details" + error)
  }
}
// promises
// making promises
const ride = new Promise((resolve, reject) => {
  if (arrived) {
    resolve(`driver arrived`);

  } else{
    reject('driver bailed');
  }
})

ride
.then(value => {
  console.log(value)// driver arrived
  //handles sucess
})
.catch(error=> {
  //handle rejection
  console.log("error")
})
.finally(()=>{
  // handling both possibilities
  console.log("this will run no matter what")
})