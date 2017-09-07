import { Component } from '@angular/core';

@Component({
  selector: 'customer-detl',
  template: `<h1>Hello {{custName}}</h1>`,
})
export class CustomerDetl  { 
        custName = 'Raj'; 
}
