import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class EmployeeService {
  constructor (
    private http: Http 
  ) {}

  getEmpList() {
    return this.http.get("http://localhost:3000/data/employees.json")
    .map((res:Response) => res.json());
  }
  
}