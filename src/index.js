import Todo from "./todo";
import Project from "./project";
import { displayTodos, TodoForm, displayProjects } from './dom.js';
import { saveProjects, loadProjects } from './storage.js';

let projects = loadProjects();

if (projects.length === 0) {
    const schoolProject = new Project('School');
    const workProject = new Project('Work');
    const personalProject = new Project('Personal');
    
    const hw = new Todo("Exam", "Study for new exam", "2024-04-13", "low");
    schoolProject.addTodo(hw);
    
    projects = [schoolProject, workProject, personalProject];
    saveProjects(projects);
}

let currentProject = projects[0];

const switchProject = (project) => {
    currentProject = project;
    displayTodos(currentProject);
    displayProjects(projects, currentProject, switchProject);
    TodoForm(currentProject);
};

displayProjects(projects, currentProject, switchProject);
displayTodos(currentProject);
TodoForm(currentProject);

export { projects, saveProjects };