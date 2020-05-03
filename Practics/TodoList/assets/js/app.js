let todoList = Array();

function ToDoItem(title, content, from) {
    this.title = title;
    this.content = content;
    this.from = from;
}





window.addEventListener('load', frameLoad);


function frameLoad(e) {
    console.log('frameLoad');
    const btnAddTodo = document.querySelector('#addTodo');

    btnAddTodo.addEventListener('click', addTodo);


    let todoListBulk = localStorage.getItem('todos');

    if (todoListBulk != null) {
        todoList = JSON.parse(todoListBulk);
        loadTodos(todoList);
    }

}

function addTodo(args) {
    console.log('addTodo');
    const todoTitle = document.querySelector('#todoTitle').value;
    const todoContent = document.querySelector('#todoContent').value;
    const todoFrom = document.querySelector('#todoFrom').value;


    let todoItem = new ToDoItem(todoTitle, todoContent, todoFrom);
    todoList.push(todoItem);
    // console.log(todoList);

    let todoListBulk = JSON.stringify(todoList);
    localStorage.setItem('todos', todoListBulk);

    loadTodos(todoList);
}

function loadTodos(todoList) {
    const todoUl = document.querySelector('#todos');
    todoUl.innerHTML = '';

    todoList.forEach((todo, index) => {
        let li = document.createElement('li');
        li.classList.add('list-group-item', 'list-group-item-action');
        todoUl.appendChild(li);

        let a = document.createElement('a');
        a.setAttribute('href', '#');
        a.setAttribute('data-id', index);
        a.addEventListener('click', clickedToDoItem);
        li.appendChild(a);

        let div = document.createElement('div');
        div.classList.add('d-flex', 'w-100', 'justify-content-between');
        a.appendChild(div);

        let h5 = document.createElement('h5');
        h5.classList.add('mb-1');
        h5.textContent = todo.title;
        div.appendChild(h5);

        let small = document.createElement('small');
        small.textContent = '3 days ago';
        div.appendChild(small);

        let p = document.createElement('p');
        p.classList.add('mb-1');
        p.textContent = todo.content;
        a.appendChild(p);

        let smallFrom = document.createElement('small');
        smallFrom.textContent = todo.from;
        a.appendChild(smallFrom);

    });
}

function clickedToDoItem(e) {
    e.preventDefault();

    let index = e.currentTarget.getAttribute('data-id');

    let todoItem = todoList[index];
    console.log(todoItem);

    document.querySelector('#todoTitle').value = todoItem.title;
    document.querySelector('#todoContent').value=todoItem.content;
    document.querySelector('#todoFrom').value=todoItem.from;
}
