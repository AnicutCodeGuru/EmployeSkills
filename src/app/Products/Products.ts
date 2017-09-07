import { Component } from '@angular/core';

@Component({
  selector: 'product',
  template: `<h1>Hello {{productName}}</h1>`,
})
export class Product  { 
        productName = 'Shampoo'; 
}
