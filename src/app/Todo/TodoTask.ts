import { Component } from '@angular/core';
import { Todo } from "./Todo";
import { TodoService } from "./srvc.Todo";
import { FormsModule } from "@angular/forms";


@Component({
    selector: 'todotask',
    templateUrl: './TodoTask.html',
})
export class TodoTask {
    strNewTask: string = "";
    todoList: Todo[] = [];
    constructor(private todoSrvc: TodoService) {
        this.getTodoList();
    }

    completeTask(task: Todo) {
        task.taskStatus = "Completed";
        this.todoSrvc.updateTask(task).subscribe(data => {
            alert(data.msg);
            this.getTodoList();
        });
    }

    createTask() {
        let newTask = new Todo(this.strNewTask, "Pending", this.todoList.length);
        this.todoSrvc.createTask(newTask).subscribe(data => {
            alert(data.msg);
            this.getTodoList();
        });
        this.strNewTask = "";
    }


    getTodoList() {
        this.todoSrvc.getTaskList().subscribe(data => {
            this.todoList = [];
            for (let i = 0; i < data.length; i++) {
                this.todoList.push(new Todo(data[i].taskName, data[i].taskStatus, data[i]._id));
            }
            console.log(this.todoList);
        });
    }

    deleteTask(task: Todo) {
        this.todoSrvc.deleteTask(task).subscribe(data => {
            alert(data.msg);
            this.getTodoList();
        });
    }
}
