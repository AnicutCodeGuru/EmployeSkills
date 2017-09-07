import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import {EmpList}  from "./Employee/EmpList";
import {EmployeeService}  from "./Employee/srvc.Employee";
import {SkillService}  from "./Employee/srvc.Skills";
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';


import {RouterModule,Routes}  from "@angular/router";


const routeMap :Routes=[
  {path:"empList", component :EmpList},
  {path:"**", component :EmpList}
]

@NgModule({
  imports:      [HttpModule, BrowserModule, RouterModule.forRoot(routeMap),FormsModule],
  declarations: [ AppComponent ,EmpList ],
  bootstrap:    [ AppComponent ],
  providers:[EmployeeService,SkillService]
})
export class MainModule { }


/**
 * template
 */ 
