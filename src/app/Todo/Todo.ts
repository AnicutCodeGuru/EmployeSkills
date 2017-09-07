export class Todo  { 
      taskName:string;
      taskStatus:string;
      taskId:number;

      constructor(taskName:string, taskStatus:string, taskId:number){
            this.taskName=taskName;
            this.taskStatus=taskStatus;
            this.taskId=taskId;
      }
}
