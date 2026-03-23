// day -5 first writing what wrote in day 4
const button_1 = document.getElementById("button-1")
const button_2 = document.getElementById("button-2")
const button_3 = document.getElementById("button-3")

button_1.addEventListener("click", function(){
button_1.style.backgroundColor = "red"
button_1.style.color = "white"

})
button_2.addEventListener("click", function(){
  button_2.style.backgroundColor = "purple"
  button_2.style.color = "white"
})
button_3.addEventListener("click", function(){
  button_3.style.backgroundColor = "black"
  button_3.style.color = "white"
})
// objects
const person_1 = {
  first_name: "Mayank",
  last_name: "Naithani",
  favorite_food: "chicken"

}
const person_2 = {
  first_name: "rahul",
  last_name: "sharma",
  favorite_food: "chips"

}
console.log(person_1);
console.log(person_2)
console.log(`Person 1 is`, person_1)
console.log(`Person 2 is`, person_2);

// asyn + await
async function userinfo(){
  try{
 const response =  await fetch("api")
 const userdata = response.json()
console.log(`Username is ${userdata.username}`)
  } catch(error) {
    console.log(`oops something went wrong, ${error}`)
  }
  {
  }
}

// promises
const ride = new Promise((resolve, reject) => {
  if(arrived){
    resolve("driver arrived")}
    else {
      reject("driver bailed")
    }
})
