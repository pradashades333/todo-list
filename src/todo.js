class Todo{
    constructor (title, description, dueDate, priority, done, id){
        this.title = title
        this.description = description
        this.dueDate = dueDate
        this.priority = priority
        this.done = false
        this.id = Date.now().toString();
    }


    changeDone () {
        this.done != !this.done;
    }

    setPriority(priority){
        this.priority = priority;
    }

    edit(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }

}

export default Todo;