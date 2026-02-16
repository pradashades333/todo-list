import Todo from "./todo";
import Project from "./project";
import { displayTodos, TodoForm, displayProjects } from './dom.js';

const projects = [];
const schoolProject = new Project('School');
const workProject = new Project('Work');
const personalProject = new Project('Personal');

let currentProject = projects[0];

const switchProject = (project) => {
    currentProject = project;
    displayTodos(currentProject);
    displayProjects(projects, currentProject, switchProject);
    TodoForm(currentProject);
};

const hw = new Todo("Exam", "Study for new exam", "2024-04-13", "low");
schoolProject.addTodo(hw);

projects.push(schoolProject, workProject, personalProject);


displayProjects(projects, currentProject, switchProject);
displayTodos(currentProject);
TodoForm(currentProject)