import { Component } from '@angular/core';
import { Employee } from "./Employee";
import { EmployeeService } from "./srvc.Employee";
import { SkillService } from "./srvc.Skills";
import { FormsModule } from "@angular/forms";


@Component({
    templateUrl: './EmpList.html',
})
export class EmpList {
    empList: Employee[] = [];
    skillsList: Object={}; 

    constructor(private empSrvc: EmployeeService,private skilsSrvc:SkillService) {
        this.getSkillsList();
    }
    
    matchSkills(skills:any[]){
        var skillsArr:string[]=[];
        if(this.skillsList===undefined){
            return;
        }

        for(let i=0;i<skills.length;i++ ){
           if(this.skillsList[skills[i]]){
             skillsArr.push(this.skillsList[skills[i]])
           }
        }
        debugger;
        return skillsArr.join(", ");
    }


    getSkillsList(){
        this.skilsSrvc.getSkillsList().subscribe(data => {
            for(let i=0;i<data.length;i++){
                this.skillsList[data[i].id]=data[i].displayName 
            }
            this.getEmployeeList();
        });
    }
    getEmployeeList() {
        this.empSrvc.getEmpList().subscribe(data => {
            this.empList = [];
            for (let i = 0; i < data.length; i++) {
                var emp = new Employee(data[i].empId, data[i].jobTitleName, data[i].firstName, data[i].lastName,data[i].phoneNumber,data[i].emailAddress,data[i].skills);
                emp.matchedSkills=this.matchSkills(data[i].skills);
                this.empList.push(emp);
             }
        });
    }

}
