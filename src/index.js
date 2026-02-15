import Todo from "./todo";
import Project from "./project";
import { displayTodos } from './dom.js';


const firstProject = new Project('School');

const hw = new Todo("Exam", "Study for new exam", "13-04-2020", "low");

firstProject.addTodo(hw);

console.log(firstProject);
console.log(firstProject.getTodos());

displayTodos(firstProject);
