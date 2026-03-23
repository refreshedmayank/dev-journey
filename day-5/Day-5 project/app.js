const setup = document.getElementById("setup")
const punchline = document.getElementById("punchline")
const button = document.getElementById("joke-button")
// fetching jokes from API
async function getjoke(){
  try {
    setup.textContent = "Loading setup..."
    punchline.textContent = "Loading punchline..."
    const response = await fetch("https://official-joke-api.appspot.com/random_joke")
    const data = await response.json()
    // updating dom with joke
    setup.textContent = data.setup
    punchline.textContent = data.punchline
    //  error handling
  } catch (error){
    setup.textContent = "Oops, something went wrong!"
    console.error(`Error fetching joke: ${error}`)
  }}
  // adding event listener to button
  button.addEventListener("click", getjoke)
