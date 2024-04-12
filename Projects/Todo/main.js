const taskInput = document.querySelector("#taskInput");
const taskAdd = document.querySelector("#taskAdd");
const taskList = document.querySelector("#taskList");
let li;

function addTask() {
  taskAdd.addEventListener("click", (e) => {
    const taskName = taskInput.value;
    console.log(taskName);
    if (taskName) {
      li = document.createElement("li");
      li.innerHTML = taskName;
      taskList.appendChild(li);
      taskInput.value = "";
      li.addEventListener("dblclick", (e) => {
        console.log(e.target);
        e.target.remove();
      });
      li.addEventListener("click", (e) => {
        e.target.classList.toggle("completed");
      });

    }
  });
}

addTask();
