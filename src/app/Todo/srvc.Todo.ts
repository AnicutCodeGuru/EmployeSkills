import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import {Todo} from "./Todo";

@Injectable()
export class TodoService {
  constructor (
    private http: Http
  ) {}

  getTaskList() {
    return this.http.get("http://localhost:3009/todo")
    .map((res:Response) => res.json());
  }
  
  createTask(taskDetl:Todo) {
    return this.http.post("http://localhost:3009/todoCreate",taskDetl)
    .map((res:Response) => res.json());
  }
  
  updateTask(taskDetl:Todo) {
    return this.http.post("http://localhost:3009/todoUpdate",taskDetl)
    .map((res:Response) => res.json());
  }
  
  deleteTask(taskDetl:Todo) {
    return this.http.post("http://localhost:3009/todoDelete",taskDetl)
    .map((res:Response) => res.json());
  }

}