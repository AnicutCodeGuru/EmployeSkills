import { Component } from '@angular/core';
import {Customer}  from "./Customers/Customer";
import {MenuItem}  from "./Common/MenuItem";
 
@Component({
  selector: 'my-app',
  template: `
   <div class="container" >
       <div class="col-md-3" >
          <ul  >
              <li *ngFor="let menu of menuList"  ><a  [routerLink]="[menu.menuValue]" >{{menu.menuName}}</a></li>
          </ul>
       </div>
       <div class="col-md-9" >
          <router-outlet></router-outlet>
       </div>
   </div>
    
   
  `,
})
export class AppComponent  {
      menuList:MenuItem[] = [];

      constructor(){
        this.menuList.push(new MenuItem("Customer","Customer"));
        this.menuList.push(new MenuItem("Product","Product"));
        this.menuList.push(new MenuItem("Todo","Todo"));
      }

 }
