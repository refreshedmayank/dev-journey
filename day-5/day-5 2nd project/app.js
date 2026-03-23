const image_btn = document.getElementById("Gen-dog")
const image = document.getElementById("dog-image")
// fetching random dog images from api
async function getdogimage(){
  try{
   const response = await fetch("https://dog.ceo/api/breeds/image/random")
   const data = await response.json()
    image.src = data.message;

  } catch(error){
    image.alt = "Failed to load image"
    console.log(`Error fetching dog image:${error}`)
  }
}
// adding event listener to button
image_btn.addEventListener("click", getdogimage);
