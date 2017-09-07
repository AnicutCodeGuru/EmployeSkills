import { Component } from '@angular/core';
import {MenuItem}  from "./Common/MenuItem";
 
@Component({
  selector: 'my-app',
  template: `
   <div style="margin:20px;" >
       <div class="col-md-2" >
          <ul  >
              <li *ngFor="let menu of menuList"  ><a  [routerLink]="[menu.menuValue]" >{{menu.menuName}}</a></li>
          </ul>
       </div>
       <div class="col-md-10" >
          <router-outlet></router-outlet>
       </div>
   </div>  
  `,
})
export class AppComponent  {
      menuList:MenuItem[] = [];

      constructor(){
        this.menuList.push(new MenuItem("Employee List","empList"));
      }

 }
