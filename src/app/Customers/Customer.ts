import { Component } from '@angular/core';
import {CustomerDetl} from './CustomerDetl';


@Component({
  selector: 'customer',
  template: `<div>
                   <customer-detl></customer-detl>
            </div>`,
})
export class Customer  { 
        custName = 'Raj'; 
}
