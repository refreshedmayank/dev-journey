
const task_input = document.getElementById('task-input');
const add_task_button = document.getElementById("Add-task-button");
const tasklist = document.getElementById("tasklist");
const delete_task_button = document.getElementById("Delete-task-button")

task_input.addEventListener("keypress", (e) => {
  if(e.key === "Enter") addTask()
})
function addTask() {
  const task = task_input.value // storing the input value inside newly create variable called task
  if (task === "") { alert("please enter a task")} // if the task is empty then alert the user to enter a task
  else { // if task value isnt empty then
    const list_item = document.createElement("li")// creating a new list element to add the task to the list
    list_item.textContent = task // storing the task value inside the newly created list element
    tasklist.appendChild(list_item)// adding the newly created list element to the tasklist
    task_input.value = ""// clearing the input field after adding the task to the list

  }
}
add_task_button.addEventListener("click", addTask) // will perform the addTask function when the user clicks the add task button.

function deleteTask(){
  const last_task = tasklist.lastElementChild // created new variable to store the last tasklist element called last_task
  if(last_task){ tasklist.removeChild(last_task)} // if last task exist then remove it from the tasklist

} /// event listener on delete task button to delete the last task when clicked
delete_task_button.addEventListener("click", deleteTask)


// event listner on add task button to change the background color and text color when user hover over it
add_task_button.addEventListener("mouseover", btn_background_color)
function btn_background_color(){
  add_task_button.style.backgroundColor = "black"
  add_task_button.style.color = "white"
  // defaulting the button background color and text color when mouse is not hovering over it anymore
  add_task_button.addEventListener("mouseout", default_btn_color)
  function default_btn_color(){
    add_task_button.style.backgroundColor = "white"
    add_task_button.style.color = "black"
  }

}
//event listener on delete task button to change the background color and text color when user hover over it
delete_task_button.addEventListener("mouseover", delete_task_button_background_color_change)
function delete_task_button_background_color_change(){
  delete_task_button.style.backgroundColor = "black"
  delete_task_button.style.color = "white"
}
// defaulting the delete task button background color and text color when mouse is not hovering over it
delete_task_button.addEventListener("mouseout", delete_task_button_default_color)
function delete_task_button_default_color(){
  delete_task_button.style.backgroundColor = "white"
  delete_task_button.style.color = "black"
}
