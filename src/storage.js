import Todo from './todo.js';
import Project from './project.js';

const saveProjects = (projects) => {
    const projectJson = JSON.stringify(projects)
    localStorage.setItem('todoProjects', projectJson)
};

const loadProjects = () => {
    const data = JSON.parse(localStorage.getItem('todoProjects'));
    return recreateProjects(data);
};


const recreateProjects = (projectsData) => {
    if (!projectsData) return [];  
    
    return projectsData.map(projectData => {
        const project = new Project(projectData.name);
        project.id = projectData.id; 
        
        projectData.todos.forEach(todoData => {
            const todo = new Todo(
                todoData.title,
                todoData.description,
                todoData.dueDate,
                todoData.priority
            );
            todo.id = todoData.id;
            todo.done = todoData.done;
            project.addTodo(todo);
        });
    
        return project;
    });
};

export {saveProjects, loadProjects }