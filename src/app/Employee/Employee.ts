export class Employee  { 
      empId:number;
      jobTitleName:string;
      firstName:string;
      lastName:string;
      phoneNumber:string;
      emailAddress:string;
      skills:any[] = [];
      matchedSkills:string="";


      constructor(empId:number,jobTitleName:string,firstName:string,lastName:string,phoneNumber:string,emailAddress:string,skills:any[]){
            this.empId=empId;
            this.jobTitleName=jobTitleName;
            this.firstName=firstName;
            this.lastName=lastName;
            this.phoneNumber=phoneNumber;
            this.emailAddress=emailAddress;
            this.skills=skills;
      }
}
