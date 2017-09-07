import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

import {Customer}  from "./Customers/customer";
import {TodoTask}  from "./Todo/TodoTask";
import {Product}  from "./Products/Products";
import {Error}  from "./Common/Error";
import {TodoService}  from "./Todo/srvc.Todo";
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import {CustomerDetl} from './Customers/CustomerDetl';

import {RouterModule,Routes}  from "@angular/router";


const routeMap :Routes=[
  {path:"Customer", component :Customer},
  {path:"Product", component :Product},
  {path:"Todo", component :TodoTask},
  {path:"**", component :Error}
]

@NgModule({
  imports:      [HttpModule, BrowserModule, RouterModule.forRoot(routeMap),FormsModule,CustomerDetl],
  declarations: [ AppComponent,Customer,Product,Error ,TodoTask ],
  bootstrap:    [ AppComponent ],
  providers:[TodoService]
})
export class MainModule { }


/**
 * template
 */ 
