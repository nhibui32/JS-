let tasks = [];
const input = document.getElementById("itemInput");
const itemDiv = document.getElementById("items")
const storageKey = "items";
input.style.marginBottom = " 10px";

function renderTask(){
    itemDiv.innerHTML = null;
    for(const [idx, item] of Object.entries(tasks)){
        const container = document.createElement("div");
        container.style.bottom = "10px";

        const text = document.createElement("p");
        text.textContent = item;

        const button = document.createElement("button");
        button.textContent = "Delete";
        button.onclick = () => deleteTask(idx);

        text.style.display ="inline";
        button.style.marginLeft= "20px";
        container.style.marginBottom = "10px";
    
        container.appendChild(text);
        container.appendChild(button);
        itemDiv.appendChild(container);
    }

}

renderTask();

function addTask() {
    if (input.value === "") {
        alert("You must write something");
    } else {
        tasks.push(input.value);
        input.value = ""; // Clear the input field after adding the task
    }
    renderTask();
    save();
}

function deleteTask(idx){
    tasks.splice(idx,1);

    renderTask();
    save();
}

function save(){
    const stringItems = JSON.stringify(tasks);
    localStorage.setItem(storageKey, stringItems);
}

function loadItems(){
    const oldItems = localStorage.getItem(storageKey);
    if(oldItems) tasks = JSON.parse(oldItems);
    renderTask();
}

document.addEventListener("DOMContentLoaded", loadItems);

