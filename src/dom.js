import Todo from "./todo";
import { projects, saveProjects } from './index.js';

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

        todoCard.appendChild(title);
        todoCard.appendChild(description);

        if (todo.dueDate) {
            const dueDate = document.createElement('p');
            dueDate.textContent = `due: ${todo.dueDate}`;
            todoCard.appendChild(dueDate);
        }

        if (todo.priority) {
            const priority = document.createElement('p');
            priority.textContent = `priority: ${todo.priority}`;
            todoCard.appendChild(priority);
        }

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = todo.done;
        todoCard.appendChild(checkbox);
        checkbox.addEventListener('click', () => {
            todo.changeDone();
            saveProjects(projects);
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
            saveProjects(projects);
            displayTodos(project);
        });

        main.appendChild(todoCard);
    });
};

let currentFormProject = null;

const TodoForm = (project) => {
    currentFormProject = project;
    const form = document.getElementById('todo-form');

    if (form.dataset.listenerAdded) return;
    form.dataset.listenerAdded = 'true';

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const title = document.getElementById('todo-title').value;
        const desc = document.getElementById('todo-desc').value;
        const date = document.getElementById('todo-date').value;
        const priority = document.getElementById('todo-priority').value;

        const newTodo = new Todo(title, desc, date, priority);
        currentFormProject.addTodo(newTodo);
        saveProjects(projects);

        form.reset();
        displayTodos(currentFormProject);
    });
};

const displayProjects = (projects, currentProject, onProjectClick) => {
    const sidebar = document.getElementById('sidebar');
    sidebar.innerHTML = '';
    
    projects.forEach((project) => {
        const projectBtn = document.createElement('button');
        projectBtn.textContent = project.name;
        projectBtn.classList.add('project-btn');
        
        if (project === currentProject) {
            projectBtn.classList.add('active');
        }
        
        projectBtn.addEventListener('click', () => {
            onProjectClick(project); 
        });
        
        sidebar.appendChild(projectBtn);
    });
};

export { displayTodos, TodoForm, displayProjects};