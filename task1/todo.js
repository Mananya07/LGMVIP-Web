const taskList = document.getElementsByClassName("tasklist")[0];
const input = document.getElementById("input");
const deleteIcon = document.getElementById("delete");

input.addEventListener("keydown", function(event){
    if(event.key === "Enter")
        addTask();
})

function addTask(){
    var divParent = document.createElement("div");
    var divChild = document.createElement("div");
    var checkIcon = document.createElement("i");
    var deleteIcon = document.createElement("i");

    divParent.className = "item";
    divParent.innerHTML = '<div>'+input.value+'</div>';

    checkIcon.className = "fas fa-check-square";
    checkIcon.style.color = "lightgray";
    checkIcon.addEventListener("click", function(){
        checkIcon.style.color = "limegreen";
    })

    divChild.appendChild(checkIcon);

    deleteIcon.className = "fas fa-trash";
    deleteIcon.style.color = "darkgray";
    deleteIcon.addEventListener("click", function(){
        divParent.remove();
    })

    divChild.appendChild(deleteIcon);

    divParent.appendChild(divChild);

    taskList.appendChild(divParent);

    input.value = '';
}