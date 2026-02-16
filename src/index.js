import Todo from "./todo";
import Project from "./project";
import { displayTodos, TodoForm } from './dom.js';



const firstProject = new Project('School');

const hw = new Todo("Exam", "Study for new exam", "2024-04-13", "low");
firstProject.addTodo(hw);

displayTodos(firstProject);

TodoForm(firstProject);