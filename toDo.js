
async function render(data){
    const list = document.getElementById('list');
    list.innerHTML = '';
    data.forEach(todo => {
        const li = document.createElement('li');
        li.innerHTML = todo;
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.name = 'name';
        checkbox.value = 'value';
        checkbox.id = `todo-${todo}`;
        list.appendChild(checkbox);
        list.appendChild(li);
    });
}


function addTodo(){
    const todo = document.getElementById('todo').value;
    const data = [todo];
    render(data);
}


data = ['todo1', 'todo2', 'todo3'];
render(data);