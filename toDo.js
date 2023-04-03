async function render(data) {
    const list = document.getElementById("list");
    list.innerHTML = "";
    data.forEach((todo) => {;
        const li = document.createElement("li");
        li.innerHTML = todo.text;
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        if (todo.done) checkbox.checked = true;
        checkbox.name = "name";
        checkbox.id = `todo-${todo.id}`;
        checkbox.addEventListener("change", saveData);
        list.appendChild(checkbox);
        list.appendChild(li);
    });
}
async function saveData() {
    updateToDo();
    const data = JSON.stringify(data);
    localStorage.setItem("data", data);
}
function updateToDo() {
    const checkboxes = document.querySelectorAll("input[type=checkbox]");
    checkboxes.forEach((checkbox) => {
        const id = checkbox.id.split("-")[1];
        const todo = data.find((todo) => todo.id == id);
        todo.done = checkbox.checked;
    });
}

function addTodo() {
    const todo = document.getElementById("todo").value;
    const data = [todo];
    render(data);
}

let data = [
    { id: 1, text: "todo1", done: true },
    { id: 2, text: "todo2", done: false },
    { id: 1, text: "todo3", done: false },
];
render(data);
