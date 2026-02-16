import Todo from "./todo";

const displayTodos = (project) => {
    const main = document.getElementById('todos-container');
    main.innerHTML = '';

    project.todos.forEach((todo) => {
        const todoCard = document.createElement('div');
        todoCard.classList.add('todo-card');

        const title = document.createElement('h3');
        title.textContent = todo.title;

        const description = document.createElement('p');
        description.textContent = todo.description;

        const dueDate = document.createElement('span');
        dueDate.textContent = `due: ${todo.dueDate}`;

        todoCard.appendChild(title);
        todoCard.appendChild(description);
        todoCard.appendChild(dueDate);

        const priority = document.createElement('span');
        priority.textContent = `priority: ${todo.priority}`;
        todoCard.appendChild(priority);

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = todo.done;
        todoCard.appendChild(checkbox);
        checkbox.addEventListener('click', () => {
            todo.changeDone();
            console.log(`${todo.title} is now ${todo.done ? 'complete' : 'incomplete'}`);

            if (todo.done) {
                todoCard.style.textDecoration = 'line-through';
                todoCard.style.opacity = '0.6';
            } else {
                todoCard.style.textDecoration = 'none';
                todoCard.style.opacity = '1';
            }
        });


        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        todoCard.appendChild(deleteBtn);

        deleteBtn.addEventListener('click', () => {
            project.removeTodo(todo.id);
            displayTodos(project);
        });

        main.appendChild(todoCard);
    });
};

const TodoForm = (project) => {
    const form = document.getElementById('todo-form');

    form.addEventListener('submit', (e) => {
        e.preventDefault()

        const title = document.getElementById('todo-title').value;
        const desc = document.getElementById('todo-desc').value;
        const date = document.getElementById('todo-date').value;
        const priority = document.getElementById('todo-priority').value;

        const newTodo = new Todo(title, desc, date, priority);
        project.addTodo(newTodo);

        form.reset();
        displayTodos(project);
    });
};


export { displayTodos, TodoForm };