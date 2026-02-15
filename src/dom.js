const displayTodos = (project) => {
    const main = document.getElementById('main');
    main.innerHTML = '';

    project.todos.forEach((todo) => {
        const todoCard = document.createElement('div');
        todoCard.classList.add('todo-card');

        const title = document.createElement('h3');
        title.textContent = todo.title;

        const description = document.createElement('p');
        description.textContent = todo.description;

        const dueDate = document.createElement('span');
        dueDate.textContent = `Due: ${todo.dueDate}`;

        todoCard.appendChild(title);
        todoCard.appendChild(description);
        todoCard.appendChild(dueDate);

        main.appendChild(todoCard);
    });
};

export { displayTodos };