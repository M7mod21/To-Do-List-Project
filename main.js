let btn = document.getElementById("btn");
let task = document.getElementById("task");
let taskList = document.getElementById("taskList");


btn.addEventListener("click", () => {
    let valueCheck = task.value.trim();
    if (valueCheck){
        let li = document.createElement("li");
        let sp = document.createElement("span");
        sp.textContent = valueCheck;
        li.appendChild(sp)
        let actions = document.createElement("div");
        actions.className = "task-actions";
        let check = document.createElement("input");
        check.type = "checkbox"
        check.id = "check"
        check.addEventListener("change", () => {
            if(check.checked){
                sp.className = "completed"
            }else{
                sp.removeAttribute("class")
            }
})
        let del = document.createElement("i");
        del.className = "fas fa-trash"
        del.addEventListener("click", () => {
            li.remove()
        })
        actions.appendChild(check);
        actions.appendChild(del);
        li.appendChild(actions);
        taskList.appendChild(li);
        task.value = "";
    }else{
        task.value = "";
    }
})


